import React, { useState } from "react";
import LeftLogo from "./assets/Leftlogo.png";
import OnlyLogo from "./assets/OnlyLogo.png";
import Logo from "./assets/Logo.png";
import IssuesLogo from "./assets/IssuesLogo.png";
import Iconkey from "./assets/Iconkey.png";
import Icongitlab from "./assets/Icongitlab.png";
import Icongh from "./assets/Icongh.png";
import Iconbitbucket from "./assets/Iconbitbucket.png";
import Iconazure from "./assets/Iconazure.png";
import up from "./assets/up.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [tabs, setTabs] = useState(0);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/repo");
  };

  return (
    <div className="w-[100%] flex justify-center items-center h-[100vh]">
      {/* First Half */}
      <div className="relative h-[100%] w-[50%] hidden sm:flex sm:flex-col">
        <div className="w-[100%] h-[100%] flex justify-center items-center pb-24">
          <div
            className="md:w-[400px] xl:w-[447px] sm:w-[400px] h-[170px] rounded-[24px] border relative"
            style={{
              boxShadow: "0 0 24px rgba(8, 23, 53, 0.16)",
            }}
          >
            <div className="h-[40%] flex justify-center items-center w-[344px] px-2 gap-x-2">
              <img src={OnlyLogo} className="w-[28px] h-[31px]" />
              <p className="font-bold text-[18px] text-[#081735]">
                AI to Detect & Autofix Bad Code
              </p>
            </div>
            <div className="w-[100%] border-[1px]"></div>
            <div className="h-[60%] flex w-[100%] justify-between items-center px-6">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-[18px] text-[#081735]">30+</p>
                <p>Language Support</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-[18px] text-[#081735]">10K+</p>
                <p>Developers</p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-[18px] text-[#081735]">100K+</p>
                <p>Hours Saved</p>
              </div>
            </div>
            {/* Absolute Box */}
            <div
              className="w-[270px] h-[164px] rounded-[24px] flex flex-col justify-between border absolute px-[30px] py-[15px] md:-right-5 -bottom-[160px] bg-white sm:right-4"
              style={{
                boxShadow: "0 0 24px rgba(8, 23, 53, 0.16)",
              }}
            >
              <div className="flex w-[100%] justify-between">
                <div>
                  <img src={IssuesLogo} className="h-[56px] w-[56px]" />
                </div>
                <div className="mr-2 flex justify-center flex-col">
                  <div className="flex">
                    <img src={up}/>
                  <p className="font-bold text-[14px] text-[#0049C6]">14%</p>
                  </div>
                  <p className="font-normal text-[12px] text-[#171717] ml-2">This week</p>
                </div>
              </div>
              <div className="flex w-[100%] justify-between">
                <div className="flex flex-col justify-around mb-1">
                  <p className="font-bold text-[14px] text-[#171717] ">Issues Fixed</p>
                  <p className="font-bold text-[32px] text-[#081735] leading-[32px]">500K+</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={LeftLogo}
          className="absolute left-0 bottom-0 xl:w-[284px] xl:h-[318px] w-[160px] h-[160px]"
        />
      </div>

      {/* Second Half */}
      <div className="sm:w-[50%] w-[100%] flex flex-col justify-center items-center h-[100%] bg-[#FAFAFA]">
        <div className="h-[62%] border border-1 border-[#E9EAEB] w-[97%] rounded-xl bg-[white]">
          {/* First Box */}
          <div className="h-[45.82%] flex flex-col justify-evenly">
            <div className="h-[45%] w-[100%] flex flex-col justify-between items-center mt-4">
              <img src={Logo} className="w-[201px] h-[40px]" />
              <p className="font-semibold text-[24px] sm:text-[32px] text-[#181D27]">
                Welcome to CodeAnt AI
              </p>
            </div>
            <div className="flex w-[100%] justify-center items-center mt-2 sm:h-[22%] h-[21%]">
              <div className="w-[89.5%] h-[100%] flex justify-center items-center">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: `${tabs == 0 ? "#1570EF" : "#FAFAFA"}`,
                    color: `${tabs == 0 ? "white" : "black"}`,
                    width: "50%",
                    height: "100%",
                    border: "1px solid #D8DAE5",
                    borderRadius: "8px",
                  }}
                  onClick={() => setTabs(0)}
                >
                  SAAS
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: `${tabs == 1 ? "#1570EF" : "#FAFAFA"}`,
                    color: `${tabs == 1 ? "white" : "black"}`,
                    width: "50%",
                    height: "100%",
                    border: "1px solid #D8DAE5",
                    borderRadius: "8px",
                  }}
                  onClick={() => setTabs(1)}
                >
                  Self Hosted
                </Button>
              </div>
            </div>
            <div></div>
          </div>
          {/* Second Box */}
          <div className="h-[54.18%] flex flex-col justify-evenly items-center relative">
            <div className="w-[100%] border-[1px] absolute top-0"></div>
            {tabs === 0 ? (
              <>
                <Button
                  variant="outlined"
                  className="responsive-button"
                  onClick={handleLogin}
                  style={{
                    height: "18%",
                    border: "1px solid #D8DAE5",
                    borderRadius: "8px",
                  }}
                >
                  <>
                    <img src={Icongh} className="mr-3" />{" "}
                    <p className="font-semibold text-[16px] text-[#171717]">
                      Sign in with Github
                    </p>
                  </>
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleLogin}
                  className="responsive-button"
                  style={{
                    height: "18%",
                    border: "1px solid #D8DAE5",
                    borderRadius: "8px",
                  }}
                >
                  <>
                    <img src={Iconbitbucket} className="mr-3" />{" "}
                    <p className="font-semibold text-[16px] text-[#171717]">
                      Sign in with Bitbucket
                    </p>
                  </>
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleLogin}
                  className="responsive-button"
                  style={{
                    height: "18%",
                    border: "1px solid #D8DAE5",
                    borderRadius: "8px",
                  }}
                >
                  <>
                    <img src={Iconazure} className="mr-3" />{" "}
                    <p className="font-semibold text-[16px] text-[#171717]">
                      Sign in with Azure Devops
                    </p>
                  </>
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleLogin}
                  className="responsive-button"
                  style={{
                    height: "18%",
                    border: "1px solid #D8DAE5",
                    borderRadius: "8px",
                  }}
                >
                  <>
                    <img src={Icongitlab} className="mr-3" />{" "}
                    <p className="font-semibold text-[16px] text-[#171717]">
                      Sign in with Gitlab
                    </p>
                  </>
                </Button>
              </>
            ) : (
              <div className="h-[100%] w-[100%] justify-center flex flex-col">
                <div className="h-[100%] w-[100%] flex flex-col items-center mt-4 gap-y-4">
                <Button
                  variant="outlined"
                  onClick={handleLogin}
                  className="responsive-button"
                  style={{
                    height: "18%",
                    border: "1px solid #D8DAE5",
                    borderRadius: "8px",
                  }}
                >
                    <>
                      <img src={Icongitlab} className="mr-3" />{" "}
                      <p className="font-semibold text-[16px] text-[#171717]">
                        Self Hosted GitLab
                      </p>
                    </>
                  </Button>
                  <Button
                  variant="outlined"
                  className="responsive-button"
                  onClick={handleLogin}
                  style={{
                    height: "18%",
                    border: "1px solid #D8DAE5",
                    borderRadius: "8px",
                  }}
                >
                    <>
                      <img src={Iconkey} className="mr-3" />{" "}
                      <p className="font-semibold text-[16px] text-[#171717]">
                        Sign in with SSO
                      </p>
                    </>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6">
          <p className="font-normal text-[#181D27] text-[16px]">
            By signing up you agree to the{" "}
            <span className="font-bold text-[16px] text-[#181D27]">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
