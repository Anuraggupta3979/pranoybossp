import React from "react";
import aabc from "../../assets/aaa.jpg";
import "../../assets/css/abc.css";
import { Grid, Typography } from "@mui/material";
function AboutCategoriesCard(props) {
  const imageorder = props.imageorder;
  const textorder = props.textorder;

  return (
    <div class="container-fluid mt-lg-2 mt-md-2 mt-2">
      <div class="row">
              <div class="col-sm-10 col-12 mx-auto" style={{ marginTop: "140px" }}>
                    <div
              className="row"
              style={{
                overflow: "hidden",
                boxShadow: "2px 2px 2px 2px #dcdde1",
              }}
            >
          <div
            class="card"
            style={{
              borderRadius: "10px",
              boxShadow: "2px 2px 2px 2px #dcdde1",
            }}
          >
            <div class="row no-gutters">
              <div class="col-lg-4 col-md-12 m-auto col-12">
                <figure class="m-auto rounded">
                  <img
                    class="card-img img-responsive"
                    src={aabc}
                    alt="Project"
                  />
                </figure>
              </div>
              <div class="col-lg-8 col-md-12 col-12">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-12">
                      <h2 class="card-title">title</h2>

                      <p style={{ height: "146px", overflow: "auto" }}>
                        deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                      </p>
                    </div>
                    <div class="col-lg-4 m-auto">
                      <div class="row m-auto">
                        <div
                          class="col-12 m-auto text-center"
                          style={{
                            boxShadow: "2px 2px 2px 2px #dcdde1",
                            borderRadius: "10px",
                            padding: "6px",
                          }}
                        >
                          <h4 class="mx-auto my-2">tgg</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="viewproject">
                    <a
                      href="<%=project.link%>"
                      class="btn btn-primary mt-3 explorebtn"
                      style={{ fontSize: "large" }}
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCategoriesCard;
