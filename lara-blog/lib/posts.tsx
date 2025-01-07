import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Define the blog post type to ensure consistency
type BlogPost = {
  id: string;
  title: string;
  date: string; // Ensure the date is a string in the format "YYYY-MM-DD"
  contentHtml?: string; // This is optional, only needed in getPostData
};

// Directory where blog posts are stored
const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: BlogPost[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date || "", // Default to empty string if no date is found
    };

    // Combine the data with the id
    return blogPost;
  });

  // Sort posts by date (ensure date is in a consistent format before comparing)
  return allPostsData.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date || "", // Default to empty string if no date is found
    contentHtml,
  };

  // Combine the data with the id
  return blogPostWithHTML;
}
