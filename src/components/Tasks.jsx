"use client";
import Link from "next/link";
import React, { useState } from "react";
import TaskCard from "./TaskCard";
import Image from "next/image";
import filled from "../../public/svg/filled.svg";
import { Search } from "lucide-react";
import { Modal } from "flowbite-react";

const Tasks = () => {
  const [openModal, setOpenModal] = useState(true);
  const [openModal2, setOpenModal2] = useState(true);

  return (
    <div className="bg-profilebg px-5 pt-20 lg:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <h1 className="font-bold text-white lg:text-[2rem]">All Task</h1>
          <Link className="text-[1rem] text-white" href="">
            view all
          </Link>
        </div>
        <div className="hidden gap-5 lg:flex">
          <div className="bg-background flex rounded-md border px-5 py-2">
            <input
              className="bg-profilebg text-white outline-none"
              placeholder="Search"
            />
            <Search color="white" />
          </div>
          <Image src={filled} alt="filled" />
        </div>
      </div>
      <TaskCard setOpenModal={setOpenModal} />
      <TaskCard setOpenModal={setOpenModal} />

      <button className="bg-blue-600 mx-auto mt-10 flex rounded-full px-5 py-2 text-white">
        Load more
      </button>

      <Modal
        className="text-white [&_div]:rounded-[3rem] [&_div]:bg-itembg"
        size="lg"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="border-0">
          <div className="flex items-center gap-4">
            <Image
              src="/svg/task-logo.svg"
              alt="task logo"
              width={60}
              height={60}
            />

            <div className="text-white">
              <h2 className="text-xl font-semibold">Raven Tactical Esport</h2>
              <p className="text-base">Follow Raven Tactical Esport on X!</p>
            </div>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="space-y-4">
            <p>
              Raven Tactical Esports is a dynamic and elite esports organization
              dedicated to dominating the competitive gaming scene with
              precision, strategy, and teamwork.
            </p>

            <section className="rounded-2xl bg-teal px-8 py-4 text-white">
              <section className="mb-6 flex items-center gap-3">
                <Image
                  src="/svg/instruction.svg"
                  alt="instruction icon"
                  width={22}
                  height={22}
                />
                <h2 className="text-lg font-semibold">Instructions</h2>
              </section>

              <section className="space-y-2">
                <li>
                  Link your X (Twitter) account to Tazkora (skip this step if
                  already linked)
                </li>
                <li>Click Follow button</li>
                <li>Interact with posts.</li>
              </section>
            </section>

            <p>
              Offer ID: <b>edae4621-899f-476a-b41a-7e8973c0a75c</b>
            </p>

            <div className="flex items-center justify-between text-lg">
              <p>Reward:</p>
              <p className="rounded-3xl bg-[#424455] px-3 py-[1px] font-semibold">
                ₦100.0
              </p>
            </div>

            <div className="flex items-stretch justify-between gap-8">
              <label className="flex w-[30%] items-center gap-3 rounded-full bg-teal px-4 py-1">
                <p>Submit</p>

                <Image
                  src="/svg/camera.svg"
                  alt="camera"
                  width={23}
                  height={23}
                />
                <input className="hidden" type="file" />
              </label>
              <button
                className="w-[60%] rounded-full bg-blue py-2"
                onClick={() => {
                  setOpenModal(false);
                  setOpenModal2(true);
                }}
              >
                Follow
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        className="text-white [&_div]:rounded-[3rem] [&_div]:bg-itembg"
        size="lg"
        dismissible
        show={openModal2}
        onClose={() => setOpenModal2(false)}
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

            <h2 className="text-2xl font-semibold">🎉 Task Completed!</h2>

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
                <h2 className="text-lg font-semibold">Submission Details</h2>
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
                onClick={() => setOpenModal2(false)}
              >
                View Submission
              </button>

              <button
                className="rounded-full border border-blue bg-blue py-2 font-semibold"
                onClick={() => setOpenModal2(false)}
              >
                Explore Tasks
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Tasks;
