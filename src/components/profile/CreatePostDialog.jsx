"use client";
import { Camera } from "lucide-react";
import { DialogContent, DialogTitle } from "../ui/dialog";
import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import Image from "next/image";
import axios from 'axios';

const CreatePostDialog = ({ taskCreatedModal, setTaskCreatedModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    bio: "",
    taskCategory: "",
    deadline: "",
    verificationMethod: "",
    totalSpots: "",
    rewardPerUser: "",
    taskLink: "",
    taskType: "",
  });

  const [deadline, setDeadline] = useState("");
  const Token = localStorage.getItem("Token")

  useEffect(() => {
    const now = new Date();
    const formattedDate = new Date(
      now.getTime() - now.getTimezoneOffset() * 60000,
    )
      .toISOString()
      .slice(0, 16);

    setDeadline(formattedDate); // Store min selectable date
    setFormData((prevData) => ({
      ...prevData,
      deadline: formattedDate, // Set default value
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field dynamically
    }));
  };

  const createTask = async (e) => {
    e.preventDefault();
    const url =
      "https://tazkora-production.up.railway.app/api/users/tasks/create";

    console.log("Form Data:", formData);

    const config = {
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    try {
      const response = await axios.post(url, formData, config);
      
      console.log("Success:", response.data);
      
      setTaskCreatedModal(true);
    } catch (error) {
      if (error.response) {
        // Server responded with an error status
        console.error(
          "Server Error:",
          error.response.status,
          error.response.message,
        );
      } else if (error.request) {
        // Request was made but no response received
        console.error("Network Error:", error.request);
      } else {
        // Other errors (e.g., request setup issue)
        console.error("Error:", error.message);
      }
    }
    // finally {
    //   setFormData({
    //     title: "",
    //     description: "",
    //     bio: "",
    //     taskCategory: "",
    //     deadline: "",
    //     verificationMethod: "",
    //     totalSpots: "",
    //     rewardPerUser: "",
    //     taskLink: "",
    //     taskType: "",
    //   });
    // }
  };

  return (
    <>
      <DialogContent className="h-[85vh] w-screen border-none bg-itembg text-white lg:max-h-[70vh] lg:w-[55vw] lg:max-w-[95vw] lg:rounded-3xl">
        <DialogTitle></DialogTitle>
        <form
          className="createModal flex h-full flex-col gap-3 overflow-y-scroll lg:my-0 lg:p-6"
          style={{ scrollbarColor: "none", scrollbarWidth: 0 }}
          onSubmit={createTask}
        >
          <div className="flex flex-col items-start gap-6 lg:flex-row">
            <label
              htmlFor="picture"
              className="flex aspect-square size-16 cursor-pointer items-center justify-center rounded-full bg-modalInput"
            >
              <Camera />
              <input type="file" className="hidden" id="picture" />
            </label>

            <div className="flex w-full flex-col gap-2 rounded-3xl bg-modalInput p-3 py-4">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Write a short descripition about business, influence etc."
                className="w-full resize-none border-0 bg-transparent shadow-none outline-0 ring-0"
                required
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Task Type</h2>

            <select
              name="taskType"
              onChange={handleChange}
              value={formData.taskType || "twitter"}
              className="rounded-lg bg-modalInput px-4 py-2"
              required
            >
              <option value="twitter">Twitter</option>
              <option value="discord">Discord</option>
              <option value="telegram">Telegram</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
            <label htmlFor="title">
              <h2 className="text-lg font-semibold">Title</h2>
            </label>

            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Short, clear title (e.g., “Follow Instagram Page”)."
              className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
            <label htmlFor="desc">
              <h2 className="min-w-max text-lg font-semibold">Description</h2>
            </label>

            <input
              id="desc"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Detailed instructions (e.g.  “Follow @BrandX and like 3 posts”)"
              className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
              required
            />
          </div>

          <div className="grid items-center gap-4 lg:grid-cols-2">
            <label htmlFor="category" className="flex items-center gap-4">
              <h2 className="min-w-max text-lg font-semibold">Task Category</h2>

              <select
                id="category"
                name="taskCategory"
                placeholder="Detailed instructions (e.g.  “Follow @BrandX and like 3 posts”)"
                className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
                value={formData.taskCategory}
                onChange={handleChange}
                required
              >
                <option value="watch-video">Watch video</option>
                <option value="take-surveys">Take surveys</option>
                <option value="Play-game">Play game</option>
                <option value="test-product">Test product</option>
                <option value="make-translation">Make translation</option>
                <option value="train-ai">Train AI</option>
              </select>
            </label>

            <label htmlFor="deadline" className="flex items-center gap-4">
              <h2 className="text-lg font-semibold">Deadline</h2>

              <input
                type="datetime-local"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
                min={deadline} // ✅ Corrected: `min` now prevents past dates
              />
            </label>
          </div>

          <div className="grid items-center gap-4 lg:grid-cols-2">
            <label htmlFor="totalSpots" className="flex items-center gap-4">
              <h2 className="min-w-max text-lg font-semibold">Total Spots</h2>

              <input
                id="totalSpots"
                name="totalSpots"
                placeholder="Amount of users"
                className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
                value={formData.totalSpots}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="rewardPerUser" className="flex items-center gap-4">
              <h2 className="text-lg font-semibold">Rewards Per User</h2>

              <input
                id="rewardPerUser"
                name="rewardPerUser"
                placeholder="NGN 200"
                className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
                value={formData.rewardPerUser}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label
            className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4"
            htmlFor="verification"
          >
            <h2 className="min-w-max text-lg font-semibold">
              Verification Method
            </h2>

            <input
              value={formData.verificationMethod}
              onChange={handleChange}
              id="verification"
              name="verificationMethod"
              placeholder="How proof will be validated (auto API, screenshot..)"
              className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
              required
            />
          </label>

          <label
            className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4"
            htmlFor="target-link"
          >
            <h2 className="min-w-max text-lg font-semibold">Target Link</h2>

            <input
              value={formData.taskLink}
              onChange={handleChange}
              id="target-link"
              name="taskLink"
              type="url"
              placeholder="https://twitter.com/yourhandle"
              className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
              required
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full self-center rounded-lg bg-blue py-2 lg:w-[60%]"
          >
            Create
          </button>
        </form>
      </DialogContent>

      <Modal
        className="text-white [&_div]:rounded-[3rem] [&_div]:bg-itembg"
        size="lg"
        dismissible
        show={taskCreatedModal}
        onClose={() => setTaskCreatedModal(false)}
      >
        <Modal.Header className="border-0 pb-0">
          <section className="space-y-4 text-center text-white">
            <Image
              className="mx-auto"
              src="/svg/task-complete.svg"
              alt="complete icon"
              width={65}
              height={65}
            />

            <h2 className="text-2xl font-semibold">🎉 Task Uploaded</h2>

            <p className="mx-auto w-[80%] text-center text-base">
              Thank you for your contribution! We appreciate your effort.
            </p>
          </section>
        </Modal.Header>

        <Modal.Body className="pb-0">
          <div className="space-y-6">
            <section className="rounded-2xl bg-teal px-8 py-4 text-white">
              <section className="mb-6 flex items-center gap-3">
                <Image
                  src="/svg/instruction.svg"
                  alt="instruction icon"
                  width={22}
                  height={22}
                />
                <h2 className="text-lg font-semibold">Task Detail</h2>
              </section>

              <ul className="space-y-2">
                <li>
                  <b>Task:</b> “Follow and like Our Social Media Post”
                </li>
                <li>
                  <b>Brand:</b> XZY Brand
                </li>
                <li>
                  <b>Submitted:</b> 15th October 2024 by 3:45pm
                </li>
                <li>
                  <b>Review:</b> Your Submission will be reviewed within 48hrs.
                </li>
                <li>
                  <b>Reward: </b> 50 points
                </li>
              </ul>
            </section>

            <div className="grid grid-cols-2 gap-8">
              <button
                className="rounded-full border border-blue py-2 font-semibold text-blue"
                onClick={() => setTaskCreatedModal(false)}
              >
                My Tasks
              </button>

              <button
                className="rounded-full border border-blue bg-blue py-2 font-semibold"
                onClick={() => setTaskCreatedModal(false)}
              >
                New Task
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreatePostDialog;
