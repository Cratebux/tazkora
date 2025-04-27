// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axios from "axios";

const TwitterSuccess = () => {
  // const searchParams = useSearchParams();
  // const router = useRouter();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchTwitterUser = async () => {
  //     const code = searchParams.get("code"); // OAuth code
  //     const state = searchParams.get("state"); // Twitter state token

  //     if (!code) {
  //       setError("Twitter authorization failed!");
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       // Call backend to get user data
  //       const response = await axios.get(
  //         `https://tazkora-3.onrender.com/api/users/twitter/callback?code=${code}&state=${state}`,
  //       );

  //       console.log("Twitter user data:", response.data);

  //       // Store user data in localStorage
  //       localStorage.setItem("twitterUser", JSON.stringify(response.data.user));

  //       // Redirect to profile or dashboard
  //       router.push("/profile/linked-accounts");
  //     } catch (err) {
  //       setError("Failed to fetch Twitter user data");
  //       console.error("Error fetching Twitter user data:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTwitterUser();
  // }, [searchParams, router]);

  // if (loading) return <p>Fetching Twitter Data...</p>;
  // if (error) return <p>{error}</p>;

  return <p>Redirecting...</p>;
};

export default TwitterSuccess;
