// Task 01:

// Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

const iterateWithAsyncAwait = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
        await new Promise((resolve) => {
        setTimeout(() => {
            console.log(arr[i]);
            resolve();
        }, 1000);
        });
    }
    };
    iterateWithAsyncAwait([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    console.log(iterateWithAsyncAwait([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Task 02:

// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

const awaitCall = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNj"
            },
        }
    );
    const data = await response.json();
    console.log(data);
    };
    awaitCall();

    console.log(awaitCall());

// Task 04:

//Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.

const concurrentRequests = async () => {
    const [response1, response2] = await Promise.all([
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: 
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNj"
                },
            }
        ),
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: 
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNj"
                },
            }
        ),
    ]);
    const [data1, data2] = await Promise.all([response1.json(), response2.json()]);
    console.log(data1, data2);
    }
    concurrentRequests();

    console.log(concurrentRequests());


// Task 05:

// Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.


const parallelCalls = async (urls) => {
    const responses = await Promise.all(
        urls.map((url) =>
            fetch(url, {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: 
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNj"
                },
            })
        )
    );
    const data = await Promise.all(responses.map((response) => response.json()));
    console.log(data);
    }
    parallelCalls([
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    ]);

    console.log(parallelCalls([
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    ]));

    