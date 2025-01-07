import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl rounded-full mx-auto mt-8"
        src="/images/profile-photo.webp"
        alt="Yenni Evwer"
        width={200}
        height={200}
        priority={true}
      />
    </section>
  );
}
