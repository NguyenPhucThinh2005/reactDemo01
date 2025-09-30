import React from "react";

export default function Contact() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contact Us</h1>
      <p>
        Nếu bạn có thắc mắc hoặc muốn liên hệ, vui lòng điền thông tin vào form
        bên dưới hoặc gửi email cho chúng tôi.
      </p>

      <form style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Họ và tên:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nhập họ và tên"
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Nhập email"
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="message">Nội dung:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Nhập tin nhắn..."
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#6a1b9a",
            color: "white",
            border: "none",
            padding: "10px 16px",
            cursor: "pointer",
          }}
        >
          Gửi
        </button>
      </form>
    </div>
  );
}
