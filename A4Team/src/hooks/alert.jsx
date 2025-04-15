import { create } from "zustand";

export const useStoreAlert = create((set) => ({
  open: false,
  message: "",
  severity: "success", // 'success' | 'error' | 'warning' | 'info'

  callAlert: (message) => {
    set({ message, open: true, severity: "success" });
  },

  callErrorAlert: (message) => {
    set({ message, open: true, severity: "error" });
  },

  callWarningAlert: (message) => {
    set({ message, open: true, severity: "warning"});
  },

  callInforAlert: (message) => {
    set({ message, open: true, severity: "info"});
  },

  closeAlert: () => {
    set({ open: false });
  }
}));
