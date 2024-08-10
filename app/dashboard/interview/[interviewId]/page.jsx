"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  /**
   * Used to Get Interview Details by MockId/Interview Id
   */
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]);
  };

  const toggleWebcam = () => {
    setWebCamEnabled(!webCamEnabled); // Toggle webcam enabled state
  };

  return (
    <div className="my-10 ">
      <h2 className="flex font-bold text-4xl justify-center my-10">
        Let's Get Started !
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-5 ">
          <div className="flex flex-col p-5 rounded-lg border gap-5">
            <h2 className="text-lg">
              <strong>Job Role/Job Position:</strong>
              {interviewData?.jobPosition}{" "}
            </h2>
            <h2 className="text-lg">
              <strong>Job Description/Tech Stack:</strong>
              {interviewData?.jobDesc}{" "}
            </h2>
            <h2 className="text-lg">
              <strong>Years of Experience:</strong>
              {interviewData?.jobExperience}{" "}
            </h2>
          </div>
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-500">
              {" "}
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-500">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>

        <div>
          {webCamEnabled ? (
            <Webcam className="flex justify-center items-center my-5"
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{
                height: '288px', // Matching the icon's height
                width: '100%',
                borderRadius: "0.5rem",
                border: "1px solid #ccc", 
              }}
            />
          ) :(
            <>
              <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
            </>
          )}
          <div className="flex justify-center mt-4">
            <div className="w-full">
              <Button
                variant="ghost"
                className="w-full"
                onClick={toggleWebcam}
              >
                {webCamEnabled ? "Disable Web Cam and Microphone" : "Enable Web Cam and Microphone"}
              </Button>
            </div>
            <div className="w-full">
              <Link
                href={"/dashboard/interview/" + params.interviewId + "/start"}
              >
                <Button className="w-full">Start Interview</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;
