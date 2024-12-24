import {
  Box,
  Button,
  Drawer,
  InputAdornment,
  TextField,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import menu from "./assets/menu.png";
import close from "./assets/close.png";
import menucall from "./assets/menucall.png";
import menucloud from "./assets/menucloud.png";
import menufram from "./assets/menufram.png";
import menuhome from "./assets/menuhome.png";
import menuhow from "./assets/menuhow.png";
import menuright from "./assets/menuright.png";
import menusetting from "./assets/menusetting.png";
import repologo from "./assets/repologo.png";
import circle from "./assets/circle.png";
import plus from "./assets/plus.png";
import refresh from "./assets/refresh.png";
import database from "./assets/database.png";
import search from "./assets/search.png";
import down from "./assets/down.png";
import codeAntLogo from "./assets/codeAntLogo.png";
import "./index.css";

const Repository = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const CustomButton = styled(Button)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
    transition: "background-color 0.3s, box-shadow 0.3s, filter 0.3s",
    "& img": {
      marginRight: theme.spacing(1),
      transition: "filter 0.3s", // Smooth transition for logo color
    },
    "&:hover": {
      backgroundColor: "#1570EF",
      boxShadow:
        "0 4px 6px rgba(10, 13, 18, 0.05), inset 0 2px 4px rgba(10, 13, 18, 0.05)", // Skeuomorphic inner shadow
    },
    "&:hover img": {
      filter: "brightness(0) invert(1)", // Makes logo white on hover
    },
    "& p": {
      fontWeight: "600",
      fontSize: "1rem",
      color: "#414651",
      transition: "color 0.3s",
    },
    "&:hover p": {
      color: "#ffffff", // Change text color on hover
    },
  }));

  // mock data
  const data = [
    {
      name: "design-system-1",
      visibility: "Public",
      lang: "JavaScript",
      size: "5871 KB",
      lastUpdated: "Updated 2 days ago",
    },
    {
      name: "custom-library",
      visibility: "Public",
      lang: "Python",
      size: "14563 KB",
      lastUpdated: "Updated 5 days ago",
    },
    {
      name: "api-wrapper",
      visibility: "Public",
      lang: "Ruby",
      size: "2311 KB",
      lastUpdated: "Updated 3 hours ago",
    },
    {
      name: "data-visualization",
      visibility: "Private",
      lang: "R",
      size: "45871 KB",
      lastUpdated: "Updated 1 day ago",
    },
    {
      name: "core-utils",
      visibility: "Public",
      lang: "Java",
      size: "7641 KB",
      lastUpdated: "Updated 2 weeks ago",
    },
    {
      name: "user-auth",
      visibility: "Public",
      lang: "C#",
      size: "6571 KB",
      lastUpdated: "Updated 1 month ago",
    },
    {
      name: "theme-manager",
      visibility: "Public",
      lang: "CSS",
      size: "1231 KB",
      lastUpdated: "Updated 6 days ago",
    },
    {
      name: "state-container",
      visibility: "Private",
      lang: "TypeScript",
      size: "3897 KB",
      lastUpdated: "Updated 4 hours ago",
    },
    {
      name: "form-validator",
      visibility: "Public",
      lang: "Go",
      size: "2743 KB",
      lastUpdated: "Updated 2 days ago",
    },
    {
      name: "chart-builder",
      visibility: "Public",
      lang: "Swift",
      size: "8437 KB",
      lastUpdated: "Updated 1 week ago",
    },
    {
      name: "notification-service",
      visibility: "Public",
      lang: "Kotlin",
      size: "2001 KB",
      lastUpdated: "Updated 8 hours ago",
    },
    {
      name: "file-uploader",
      visibility: "Public",
      lang: "PHP",
      size: "5493 KB",
      lastUpdated: "Updated 3 weeks ago",
    },
    {
      name: "logger-library",
      visibility: "Private",
      lang: "Shell",
      size: "1893 KB",
      lastUpdated: "Updated 1 week ago",
    },
    {
      name: "data-fetcher",
      visibility: "Public",
      lang: "Rust",
      size: "3311 KB",
      lastUpdated: "Updated 5 days ago",
    },
    {
      name: "image-processor",
      visibility: "Public",
      lang: "C++",
      size: "7391 KB",
      lastUpdated: "Updated 2 months ago",
    },
    {
      name: "icon-set",
      visibility: "Private",
      lang: "HTML",
      size: "481 KB",
      lastUpdated: "Updated 3 days ago",
    },
    {
      name: "table-generator",
      visibility: "Public",
      lang: "Scala",
      size: "5317 KB",
      lastUpdated: "Updated 1 day ago",
    },
    {
      name: "access-control",
      visibility: "Public",
      lang: "Elixir",
      size: "2871 KB",
      lastUpdated: "Updated 2 weeks ago",
    },
    {
      name: "svg-editor",
      visibility: "Private",
      lang: "Haskell",
      size: "943 KB",
      lastUpdated: "Updated 10 hours ago",
    },
    {
      name: "report-generator",
      visibility: "Public",
      lang: "Dart",
      size: "9231 KB",
      lastUpdated: "Updated 1 month ago",
    },
    {
      name: "event-handler",
      visibility: "Public",
      lang: "Lua",
      size: "6711 KB",
      lastUpdated: "Updated 1 week ago",
    },
    {
      name: "localization-helper",
      visibility: "Private",
      lang: "Perl",
      size: "1291 KB",
      lastUpdated: "Updated 6 days ago",
    },
    {
      name: "schema-validator",
      visibility: "Public",
      lang: "Erlang",
      size: "4317 KB",
      lastUpdated: "Updated 5 days ago",
    },
    {
      name: "ui-framework",
      visibility: "Public",
      lang: "MATLAB",
      size: "8321 KB",
      lastUpdated: "Updated 2 months ago",
    },
    {
      name: "animation-library",
      visibility: "Private",
      lang: "Fortran",
      size: "1029 KB",
      lastUpdated: "Updated 8 hours ago",
    },
    {
      name: "dependency-injector",
      visibility: "Public",
      lang: "VBScript",
      size: "5617 KB",
      lastUpdated: "Updated 1 week ago",
    },
    {
      name: "mock-service",
      visibility: "Public",
      lang: "Objective-C",
      size: "4391 KB",
      lastUpdated: "Updated 1 month ago",
    },
    {
      name: "test-runner",
      visibility: "Private",
      lang: "Groovy",
      size: "297 KB",
      lastUpdated: "Updated 3 days ago",
    },
    {
      name: "api-client",
      visibility: "Public",
      lang: "F#",
      size: "6317 KB",
      lastUpdated: "Updated 1 day ago",
    },
    {
      name: "feature-flags",
      visibility: "Public",
      lang: "Delphi",
      size: "3871 KB",
      lastUpdated: "Updated 1 month ago",
    },
    {
      name: "error-handler",
      visibility: "Private",
      lang: "COBOL",
      size: "431 KB",
      lastUpdated: "Updated 10 hours ago",
    },
    {
      name: "analytics-dashboard",
      visibility: "Public",
      lang: "Assembly",
      size: "11231 KB",
      lastUpdated: "Updated 2 months ago",
    },
    {
      name: "dynamic-tables",
      visibility: "Public",
      lang: "Ada",
      size: "7711 KB",
      lastUpdated: "Updated 1 week ago",
    },
  ];

  // if search text is empty, show all data
  useEffect(() => {
    handleSearch();
    if (filteredData.length === 0) setFilteredData(data);
  }, [searchText]);

  const handleSearch = () => {
    const newData = data.filter((item) => item.name.includes(searchText));
    setFilteredData(newData);
  };

  // Sidebar
  const sideBar = () => {
    return (
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
          },
          height: {
            sm: "91vh",
            md: "91vh",
          },
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            xs: "space-between",
            sm: "flex-start",
          },
          alignItems: "center",
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className="flex justify-between sm:mr-10 pt-2">
          <img
            src={repologo}
            className="w-[82.74%] h-[32px] ml-1 sm:ml-0 sm:mr-4 sm:hidden"
          />
          <img
            src={codeAntLogo}
            className="w-[100%] h-[32px] ml-4 sm:ml-0 sm:mr-4 hidden sm:flex"
          />
          <div className="sm:hidden">
            <Button
              style={{ backgroundColor: "white" }}
              onClick={toggleDrawer(true)}
            >
              <img src={close} className="ml-6" />
            </Button>
          </div>
        </div>
        <Box style={{ width: "100%", height: "100%" }}>
          <div className="h-[100%] mr-[10px]">
            <div className="flex mt-6 rounded-md py-2 sm:mr-8">
              {/* <TextField
                value="UtkarshDhairyaPanwar"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={down} />
                    </InputAdornment>
                  ),
                  readOnly: true, // To mimic a static text display
                  style: {
                    fontSize: "16px",
                    fontWeight: "400", // Equivalent to "font-normal"
                  },
                }}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px", // Optional, customize as needed
                  },
                  width: {
                    sm: "90%", // Width on small screens
                  },
                }}
              /> */}
              <TextField
                value="UtkarshDhairyaPanwar"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={down} />
                    </InputAdornment>
                  ),
                  readOnly: true, // To mimic a static text display
                  style: {
                    fontSize: "16px",
                    fontWeight: "400",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis", // Show ellipsis for truncated text
                  },
                }}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                  "& .MuiInputBase-input": {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                  width: {
                    sm: "87%", // Width on small screens
                  },
                }}
              />
            </div>
            <div className="flex flex-col h-[97%] 2xl:h-[95%] sm:justify-between mt-4 pb-4">
              <div className="flex flex-col sm:w-[80%] xl:mr-8">
                <CustomButton>
                  <>
                    <img src={menuhome} className="mr-2" />{" "}
                    <p className="font-semibold text-md text-[#414651]">
                      Repositories
                    </p>
                  </>
                </CustomButton>
                <CustomButton>
                  <>
                    <img src={menufram} className="mr-2" />{" "}
                    <p className="font-semibold text-md text-[#414651]">
                      AI Code Review
                    </p>
                  </>
                </CustomButton>
                <CustomButton>
                  <>
                    <img src={menucloud} className="mr-2" />{" "}
                    <p className="font-semibold text-md text-[#414651]">
                      Cloud Security
                    </p>
                  </>
                </CustomButton>
                <CustomButton>
                  <>
                    <img src={menuhow} className="mr-2" />{" "}
                    <p className="font-semibold text-md text-[#414651]">
                      How to Use
                    </p>
                  </>
                </CustomButton>
                <CustomButton>
                  <>
                    <img src={menusetting} className="mr-2" />{" "}
                    <p className="font-semibold text-md text-[#414651]">
                      Settings
                    </p>
                  </>
                </CustomButton>
              </div>
              <div className="flex flex-col sm:w-[80%] justify-start">
                <CustomButton>
                  <>
                    <img src={menucall} className="mr-2" />{" "}
                    <p className="font-semibold text-md text-[#414651]">
                      Support
                    </p>
                  </>
                </CustomButton>
                <CustomButton>
                  <>
                    <img src={menuright} className="mr-2" />{" "}
                    <p className="font-semibold text-md text-[#414651]">
                      Logout
                    </p>
                  </>
                </CustomButton>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    );
  };

  return (
    <div className="w-[100vw] sm:w-full flex flex-col sm:flex-row font-inter">
      <div className="flex w-[100%] justify-between h-[64px] items-center sm:hidden border-b-[1px] border-[#E9EAEB]">
        <img src={repologo} className="w-[82.74%] h-[32px] ml-4" />
        <Button
          style={{ backgroundColor: "white" }}
          onClick={toggleDrawer(true)}
        >
          <img src={menu} />
        </Button>
        <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {sideBar()}
        </Drawer>
      </div>
      <div className=" hidden sm:flex sm:h-[100%] sm:fixed">{sideBar()}</div>
      <div className="h-[100vh] sm:bg-[#FAFAFA] sm:h-[100%] sm:ml-60 sm:w-[100%]">
        <div className="m-0 sm:m-8 bg-white rounded-xl">
          {/* Top Box */}
          <div className="px-4 w-[100%] sm:py-4 mt-1 sm:mt-0">
            <div className="flex flex-col sm:flex-row gap-y-2 sm:w-[100%] sm:justify-between">
              <div className="flex flex-col">
                <p className="font-semibold text-[32px] text-[#181D27]">
                  Repositories
                </p>
                <p className="font-normal text-[14px] text-[#414651]">
                  {data.length} total repositories
                </p>
              </div>
              <div className="flex gap-x-1 sm:items-center sm:gap-x-4">
                <Button
                  variant="contained"
                  style={{
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#414651",
                    backgroundColor: "white",
                    border: "2px",
                    borderRadius: "8px",
                  }}
                  sx={{
                    height: {
                      sm: "40px", // Height on small screens
                    },
                  }}
                >
                  <>
                    <img src={refresh} className="mr-2" />{" "}
                    <p className="font-normal text-md text-[#414651]">
                      Refresh All
                    </p>
                  </>
                </Button>
                <Button
                  variant="contained"
                  style={{
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#414651",
                    backgroundColor: "#1570EF",
                    border: "2px",
                    borderRadius: "8px",
                  }}
                  sx={{
                    height: {
                      sm: "40px", // Height on small screens
                    },
                  }}
                >
                  <>
                    <img src={plus} className="mr-2" />{" "}
                    <p className="font-normal text-md text-white">
                      Add Repository
                    </p>
                  </>
                </Button>
              </div>
            </div>
            <div className="w-[100%] sm:w-[30%] mt-4 flex justify-start items-center">
              <TextField
                style={{ width: "90%" }}
                placeholder="Search Repositories"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                sx={{
                  "& input::placeholder": {
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#414651",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    border: "1px solid #D5D7DA",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={search} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>

          {/* Bottom Box */}
          <div className="flex-1 overflow-y-auto mt-4">
            {filteredData.map((item) => (
              <div className="flex flex-col border-t-2 py-4 px-4 gap-y-1 hover:bg-[#F5F5F5]">
                <div className="flex gap-x-2">
                  <p className="font-medium sm:text-[18px] text-[20px] text-[#181D27]">
                    {item.name}
                  </p>
                  <p className="border border-1 border-[#B2DDFF] bg-[#EFF8FF] rounded-2xl px-2 py-1 font-normal text-[14px] text-[#175CD3]">
                    {item.visibility}
                  </p>
                </div>
                <div className="flex gap-x-3">
                  <p className="flex gap-x-1 justify-center items-center font-normal text-[14px] sm:text-[16px] text-[#181D27]">
                    {item.lang}{" "}
                    {<img src={circle} className="w-[8px] h-[8px]" />}
                  </p>
                  <p className="flex gap-x-1 justify-center items-center font-normal text-[14px] sm:text-[16px] text-[#181D27]">
                    {<img src={database} className="w-[8px] h-[8px]" />}{" "}
                    {item.size}
                  </p>
                  <p className="font-normal text-[14px] sm:text-[16px] text-[#181D27]">
                    {item.lastUpdated}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
