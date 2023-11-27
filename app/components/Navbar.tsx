"use client";
import * as React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./Utils";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "@/hooks/useAuth";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const { data, loading } = React.useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="gap-4">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: "none", sm: "block" } }}>
            ShopsMila
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <div>
            {loading ? null : (
              <div className="flex">
                {data ? (
                  <button
                    className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
                    onClick={signout}>
                    Sign out
                  </button>
                ) : (
                  <>
                    <AuthModal isSignin={true} />
                    <AuthModal isSignin={false} />
                  </>
                )}
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
