// Copyright 2024 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
import { Grid, PageRow, PageTitle, ButtonPrimary } from "@polkadot-cloud/react"
import { useState } from "react"

import { Octokit } from "@octokit/core"

import "./index.scss"

const octokit = new Octokit({ auth: `personal-access-token123` })

export const GithubRequests = () => {
  const [formData, setFormData] = useState({
    type: "change",
    title: "",
    message: "",
  })

  const handleDropdownChange = (event: any) => {
    const { value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      type: value,
    }))
  }

  const handleChange = (
    event: { target: { value: any } },
    type: "input" | "msg"
  ) => {
    const { value } = event.target
    let perform
    if (type === "input") {
      perform = (prevFormData: any) => ({ ...prevFormData, title: value })
    } else {
      perform = (prevFormData: any) => ({ ...prevFormData, message: value })
    }
    setFormData(perform)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    console.log(
      `Title: ${formData.title}, Type: ${formData.type}, Message: ${formData.message}`
    )

    if (!!formData.message && !!formData.title) {
      await octokit.request(
        "POST /repos/polkadot-blockchain-academy/alumni-hub/issues",
        {
          owner: "polkadot-blockchain-academy",
          repo: "alumni-hub",
          title: formData.title,
          body: formData.message,
          assignees: ["wirednkod"],
          milestone: 1,
          labels: [formData.type],
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      )
    } else {
      console.log("!!!")
    }
  }

  return (
    <div className="form-request">
      <PageTitle title="Request a change" />
      <PageRow style={{ paddingTop: "1rem" }}>
        <form className="form" onSubmit={handleSubmit}>
          <Grid row>
            <Grid column sm={12} md={2}>
              Type of request:
            </Grid>
            <Grid column sm={12} md={10}>
              <select
                className="select"
                value={formData.type}
                onChange={(val) => handleDropdownChange(val)}
              >
                <option value="change">A Change</option>
                <option value="feature">A Feature</option>
                <option value="bug">A Bug</option>
              </select>
            </Grid>
          </Grid>
          <Grid row>
            <Grid column sm={12} md={2}>
              Title:
            </Grid>
            <Grid column sm={12} md={10}>
              <input
                className="form-input"
                type="text"
                id="title"
                maxLength={256}
                value={formData.title}
                onChange={(val) => handleChange(val || "", "input")}
              />
            </Grid>
          </Grid>
          <Grid row>
            <Grid column sm={12} md={2}>
              Message:
            </Grid>
            <Grid column sm={12} md={10}>
              <textarea
                id="message"
                className="form-text"
                value={formData.message}
                onChange={(val) => handleChange(val || "", "msg")}
              />
            </Grid>
          </Grid>
          <ButtonPrimary text="Submit" onClick={(e) => handleSubmit(e)} />
        </form>
      </PageRow>
    </div>
  )
}
