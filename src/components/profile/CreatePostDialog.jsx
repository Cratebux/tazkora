"use client";
import { Camera } from "lucide-react";
import { DialogContent, DialogTitle } from "../ui/dialog";

const CreatePostDialog = () => {
  return (
    <DialogContent className="h-[100vh] w-[100vw] border-none bg-itembg text-white lg:max-h-[70vh] lg:w-[55vw] lg:max-w-[95vw] lg:rounded-3xl">
      <DialogTitle></DialogTitle>
      {/* max-h-[80%] */}

      <form
        className="createModal flex h-full flex-col gap-3 overflow-y-scroll lg:my-0 lg:p-6"
        style={{ scrollbarColor: "none", scrollbarWidth: 0 }}
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
              className="w-full resize-none border-0 bg-transparent shadow-none outline-0 ring-0"
              placeholder="Write a short descripition about business, influence etc."
              name="bio"
              id="bio"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Task Type</h2>
          <div className="rounded-lg bg-modalInput px-4 py-2">Online</div>
        </div>

        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
          <label htmlFor="title">
            <h2 className="text-lg font-semibold">Title</h2>
          </label>

          <input
            id="title"
            placeholder="Short, clear title (e.g., “Follow Instagram Page”)."
            className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
          <label htmlFor="desc">
            <h2 className="text-lg font-semibold">Description</h2>
          </label>

          <input
            id="desc"
            placeholder="Detailed instructions (e.g.  “Follow @BrandX and like 3 posts”)"
            className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
          />
        </div>

        <div className="grid items-center gap-4 lg:grid-cols-2">
          <label htmlFor="category" className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">Task Category</h2>

            <select
              id="category"
              placeholder="Detailed instructions (e.g.  “Follow @BrandX and like 3 posts”)"
              className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
            >
              <option value="social-media">Social media</option>
            </select>
          </label>

          <label htmlFor="deadline" className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">Deadline</h2>

            <select
              id="deadline"
              placeholder="Detailed instructions (e.g.  “Follow @BrandX and like 3 posts”)"
              className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
            >
              <option value="social-media">Timeframe (e.g.)</option>
            </select>
          </label>
        </div>

        <label
          className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4"
          htmlFor="verification"
        >
          <h2 className="text-lg font-semibold">Verification Method</h2>

          <input
            id="verification"
            placeholder="How proof will be validated (auto API, screenshot..)"
            className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
          />
        </label>

        <label
          className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4"
          htmlFor="target-link"
        >
          <h2 className="text-lg font-semibold">Target Link</h2>

          <input
            id="target-link"
            className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
          />
        </label>

        <label
          className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4"
          htmlFor="budget"
        >
          <h2 className="text-lg font-semibold">Budget</h2>

          <input
            id="budget"
            className="w-full rounded-lg bg-modalInput px-4 py-2 outline-none"
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
  );
};

export default CreatePostDialog;
