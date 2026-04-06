"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconSend, IconCheck, IconAlertCircle, IconLoader2 } from "@tabler/icons-react";

/* ── Types ──────────────────────────────────────────────── */
type Status = "idle" | "loading" | "success" | "error";

interface Field { value: string; error: string }
interface FormState {
  name: Field;
  email: Field;
  subject: Field;
  message: Field;
}

/* ── Shared input style — unchanged from original ───────── */
const inputStyle: React.CSSProperties = {
  backgroundColor: "var(--bg-card)",
  border: "1px solid var(--border-subtle)",
  color: "var(--text-primary)",
  borderRadius: "0.5rem",
  padding: "0.625rem 0.875rem",
  fontSize: "0.875rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

const inputFocusStyle: React.CSSProperties = {
  borderColor: "rgba(99,102,241,0.45)",
  boxShadow: "0 0 0 3px rgba(99,102,241,0.08)",
};

const errorBorderStyle: React.CSSProperties = {
  borderColor: "rgba(239,68,68,0.5)",
};

const defaultForm: FormState = {
  name:    { value: "", error: "" },
  email:   { value: "", error: "" },
  subject: { value: "", error: "" },
  message: { value: "", error: "" },
};

/* ── Client-side validation ─────────────────────────────── */
function validate(form: FormState): FormState {
  const next = { ...form };
  next.name    = { ...form.name,    error: form.name.value.trim()    ? "" : "Name is required." };
  next.email   = { ...form.email,   error: !form.email.value.trim()  ? "Email is required."
                                         : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value)
                                         ? "Enter a valid email." : "" };
  next.message = { ...form.message, error: form.message.value.trim() ? "" : "Message is required." };
  return next;
}

/* ── Component ──────────────────────────────────────────── */
export const Contact = () => {
  const [form, setForm]     = useState<FormState>(defaultForm);
  const [status, setStatus] = useState<Status>("idle");
  const [apiMsg, setApiMsg] = useState("");

  const set = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: { value, error: "" } }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const validated = validate(form);
    const hasErrors = Object.values(validated).some((f) => f.error);
    if (hasErrors) { setForm(validated); return; }

    setStatus("loading");
    setApiMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    form.name.value.trim(),
          email:   form.email.value.trim(),
          subject: form.subject.value.trim(),
          message: form.message.value.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setApiMsg("Message sent successfully. I'll get back to you soon.");
        setForm(defaultForm);
      } else {
        setStatus("error");
        setApiMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setApiMsg("Something went wrong. Please try again.");
    }
  };

  const isLoading = status === "loading";

  /* ── Button appearance ──────────────────────────────── */
  const btnGradient =
    status === "success" ? "linear-gradient(135deg, #10b981, #059669)"
    : status === "error"  ? "linear-gradient(135deg, #ef4444, #dc2626)"
    : "linear-gradient(135deg, var(--accent-purple), var(--accent-blue))";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Row 1 — Name + Email */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 space-y-1">
          <InputField
            type="text"
            placeholder="Your Name"
            value={form.name.value}
            error={form.name.error}
            disabled={isLoading}
            onChange={(v) => set("name", v)}
          />
        </div>
        <div className="flex-1 space-y-1">
          <InputField
            type="email"
            placeholder="Your Email"
            value={form.email.value}
            error={form.email.error}
            disabled={isLoading}
            onChange={(v) => set("email", v)}
          />
        </div>
      </div>

      {/* Row 2 — Subject */}
      <InputField
        type="text"
        placeholder="Subject (optional)"
        value={form.subject.value}
        error={form.subject.error}
        disabled={isLoading}
        onChange={(v) => set("subject", v)}
      />

      {/* Row 3 — Message */}
      <div>
        <textarea
          placeholder="Your Message"
          rows={8}
          disabled={isLoading}
          style={{
            ...inputStyle,
            resize: "vertical",
            ...(form.message.error ? errorBorderStyle : {}),
            opacity: isLoading ? 0.6 : 1,
          }}
          value={form.message.value}
          onChange={(e) => set("message", e.target.value)}
          onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
          onBlur={(e)  => {
            e.currentTarget.style.borderColor = form.message.error
              ? "rgba(239,68,68,0.5)" : "var(--border-subtle)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        <FieldError msg={form.message.error} />
      </div>

      {/* API feedback banner */}
      <AnimatePresence>
        {(status === "success" || status === "error") && apiMsg && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex items-start gap-2.5 px-4 py-3 rounded-lg text-sm"
            style={{
              backgroundColor: status === "success"
                ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)",
              border: `1px solid ${status === "success"
                ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`,
              color: status === "success" ? "#10b981" : "#f87171",
            }}
          >
            {status === "success"
              ? <IconCheck className="h-4 w-4 flex-shrink-0 mt-0.5" />
              : <IconAlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            }
            <span>{apiMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit button — unchanged visual design */}
      <motion.button
        whileHover={isLoading ? {} : { scale: 1.02 }}
        whileTap={isLoading ? {}  : { scale: 0.98 }}
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200"
        style={{
          background: btnGradient,
          color: "#fff",
          boxShadow: "0 4px 20px rgba(99,102,241,0.25)",
          opacity: isLoading ? 0.8 : 1,
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? (
          <>
            <IconLoader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : status === "success" ? (
          <>
            <IconCheck className="h-4 w-4" />
            Message Sent!
          </>
        ) : (
          <>
            <IconSend className="h-4 w-4" />
            Send Message
          </>
        )}
      </motion.button>

      {/* Reset after success */}
      <AnimatePresence>
        {status === "success" && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            type="button"
            onClick={() => { setStatus("idle"); setApiMsg(""); }}
            className="w-full text-xs text-center transition-opacity hover:opacity-80"
            style={{ color: "var(--text-muted)" }}
          >
            Send another message
          </motion.button>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

/* ── Sub-components ─────────────────────────────────────── */
function InputField({
  type, placeholder, value, error, disabled, onChange,
}: {
  type: string; placeholder: string; value: string;
  error: string; disabled: boolean; onChange: (v: string) => void;
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          ...inputStyle,
          ...(error ? errorBorderStyle : {}),
          opacity: disabled ? 0.6 : 1,
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error
            ? "rgba(239,68,68,0.5)" : "var(--border-subtle)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      <FieldError msg={error} />
    </div>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="text-xs mt-1.5 ml-0.5"
          style={{ color: "#f87171" }}
        >
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
