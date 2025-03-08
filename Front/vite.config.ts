import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// Load environment variables from .env
const serverUrl = process.env.VITE_SERVER_URL;
const iaApiUrl = process.env.VITE_IA_API_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3001,
  },
  server: {
    port: 3001,
    host: true, // needed for the Docker Container port mapping to work
    watch: {
      // add the next lines if you're using windows and hot reload doesn't work
      usePolling: true,
    },
    allowedHosts: [".grande-ecole-it.com", "localhost"],
    proxy: {
      "/server": {
        target: serverUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ""),
        configure: (proxy, options) => {
          proxy.on("error", (err, _req, _res) => {
            console.log("error", err);
          });
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            console.log("Request sent to target:", req.method, req.url);
          });
          proxy.on("proxyRes", (proxyRes, req, _res) => {
            console.log(
              "Response received from target:",
              proxyRes.statusCode,
              req.url
            );
          });
        },
        secure: false,
        ws: true,
      },
      "/apiurl": {
        target: iaApiUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiurl/, ""),
        configure: (proxy, options) => {
          proxy.on("error", (err, _req, _res) => {
            console.log("error", err);
          });
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            console.log("Request sent to target:", req.method, req.url);
          });
          proxy.on("proxyRes", (proxyRes, req, _res) => {
            console.log(
              "Response received from target:",
              proxyRes.statusCode,
              req.url
            );
          });
        },
        secure: false,
        ws: true,
      },
      "/ws": {
        target: iaApiUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ws/, ""),
        configure: (proxy, options) => {
          proxy.on("error", (err, _req, _res) => {
            console.log("error", err);
          });
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            console.log("Request sent to target:", req.method, req.url);
          });
          proxy.on("proxyRes", (proxyRes, req, _res) => {
            console.log(
              "Response received from target:",
              proxyRes.statusCode,
              req.url
            );
          });
        },
        secure: false,
        ws: true,
      },
    },
  },
  // define: {
  //   'process.env': {}
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
