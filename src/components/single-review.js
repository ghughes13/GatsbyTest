import React from "react"
import { Col } from "react-bootstrap"
import YourVideo from "./video-player.js"

export default function SingleReivew(props) {
  let data = require("../../reviews-data.json")
  let number = props.number

  if (props.type === "half") {
    return (
      <Col className="content-container centered-text half">
        <div
          className={
            "review-container number-" + data.indexOf(data[number - 1])
          }
        >
          <YourVideo props={data[number - 1]} />
          <div className="data-container">
            <p className="company-name">{data[number - 1].name}</p>
            <p className="pink-text">
              Total leads: {data[number - 1].leadName}
            </p>
            <p className="quote">{data[number - 1].review}</p>
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="314.541"
                height="38.89"
                viewBox="0 0 314.541 38.89"
              >
                <g
                  id="Group_1202"
                  data-name="Group 1202"
                  transform="translate(-468.001 -3813.076)"
                >
                  <path
                    id="Path_744"
                    data-name="Path 744"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(118.001 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_745"
                    data-name="Path 745"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(186.804 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_746"
                    data-name="Path 746"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(254.145 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_747"
                    data-name="Path 747"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(322.951 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_748"
                    data-name="Path 748"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(391.755 3451.449)"
                    fill="#fcac18"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Col>
    )
  } else if (props.type === "personal-half") {
    return (
      <Col className="content-container centered-text half-person">
        <div
          className={
            "review-container number-" + data.indexOf(data[number - 1])
          }
        >
          <img src={data[number - 1].video} alt="video" />
          <div className="data-container">
            <p className="company-name">{data[number - 1].name}</p>
            <p className="pink-text">{data[number - 1].leadName}</p>
            <p className="quote">{data[number - 1].review}</p>
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="314.541"
                height="38.89"
                viewBox="0 0 314.541 38.89"
              >
                <g
                  id="Group_1202"
                  data-name="Group 1202"
                  transform="translate(-468.001 -3813.076)"
                >
                  <path
                    id="Path_744"
                    data-name="Path 744"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(118.001 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_745"
                    data-name="Path 745"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(186.804 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_746"
                    data-name="Path 746"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(254.145 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_747"
                    data-name="Path 747"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(322.951 3451.449)"
                    fill="#fcac18"
                  />
                  <path
                    id="Path_748"
                    data-name="Path 748"
                    d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                    transform="translate(391.755 3451.449)"
                    fill="#fcac18"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Col>
    )
  } else {
    return (
      <div
        className={
          "review-container content-container centered-text full-person number-" +
          data.indexOf(data[number - 1])
        }
      >
        <img src={data[number - 1].video} alt="video" />
        <div className="data-container">
          <p className="company-name">{data[number - 1].name}</p>
          <p className="pink-text">{data[number - 1].leadName}</p>
          <div className="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="314.541"
              height="38.89"
              viewBox="0 0 314.541 38.89"
            >
              <g
                id="Group_1202"
                data-name="Group 1202"
                transform="translate(-468.001 -3813.076)"
              >
                <path
                  id="Path_744"
                  data-name="Path 744"
                  d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                  transform="translate(118.001 3451.449)"
                  fill="#fcac18"
                />
                <path
                  id="Path_745"
                  data-name="Path 745"
                  d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                  transform="translate(186.804 3451.449)"
                  fill="#fcac18"
                />
                <path
                  id="Path_746"
                  data-name="Path 746"
                  d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                  transform="translate(254.145 3451.449)"
                  fill="#fcac18"
                />
                <path
                  id="Path_747"
                  data-name="Path 747"
                  d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                  transform="translate(322.951 3451.449)"
                  fill="#fcac18"
                />
                <path
                  id="Path_748"
                  data-name="Path 748"
                  d="M371.3,362.192l5.516,11.177a1.014,1.014,0,0,0,.763.555l12.335,1.792a1.014,1.014,0,0,1,.562,1.73l-8.926,8.7a1.013,1.013,0,0,0-.292.9l2.107,12.285A1.014,1.014,0,0,1,381.9,400.4l-11.033-5.8a1.014,1.014,0,0,0-.944,0l-11.033,5.8a1.014,1.014,0,0,1-1.471-1.069l2.107-12.285a1.014,1.014,0,0,0-.292-.9l-8.926-8.7a1.014,1.014,0,0,1,.562-1.73l12.335-1.792a1.014,1.014,0,0,0,.764-.555l5.516-11.177A1.014,1.014,0,0,1,371.3,362.192Z"
                  transform="translate(391.755 3451.449)"
                  fill="#fcac18"
                />
              </g>
            </svg>
          </div>
          <p className="quote">{data[number - 1].review}</p>
        </div>
      </div>
    )
  }
}
