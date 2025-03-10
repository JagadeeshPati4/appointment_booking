import React ,{ lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const  Navbar = lazy(()=> import("../components/navbar"));
const Loading = lazy(()=> import("../components/Loading"));

const MainPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage:
          "url(https://r.mobirisesite.com/1235201/assets/images/photo-1576091160550-2173dba999ef.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
        backgroundAttachment: "fixed", 
        display: "flex",
        flexDirection:'row',
        justifyItems:'center',
        alignItems: "center",
        overflowX: "hidden",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        // p: {'sm':0,'md':3},
      }}
    >
      {/* Fixed Navbar */}
      <Suspense fallback={<Loading />}>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1000}}>
        <Navbar />
      </Box>
      <Box sx={{marginTop:{'xs':'10%','md':'4%'}}}>
        <Outlet />
      </Box>
      
      </Suspense>
    </Box>
  );
};

export default MainPage;
