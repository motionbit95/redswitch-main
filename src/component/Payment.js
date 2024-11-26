import React, { useState } from "react";

const PaymentPage = () => {
  const [iframeSrc, setIframeSrc] = useState(null);

  const handlePayment = async () => {
    const paymentData = {
      goodsNm: "Test Product",
      goodsAmt: 10000,
      ordNm: "John Doe",
      ordTel: "01012345678",
      ordEmail: "test@example.com",
      ordNo: "1234567890",
    };

    try {
      const response = await fetch("http://localhost:8080/payments/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        const html = await response.text();
        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        setIframeSrc(url); // iframe에 HTML 렌더링
      } else {
        console.error("결제 요청 실패");
      }
    } catch (error) {
      console.error("결제 요청 중 오류:", error);
    }
  };

  return (
    <div
      style={{
        position: "relative", // 부모 div에 relative 포지셔닝
        width: "100%",
        height: "100vh", // 화면 전체를 채움
      }}
    >
      {/* 결제 버튼 */}
      <button
        onClick={handlePayment}
        style={{
          position: "absolute",
          top: "20px", // 화면 상단에 버튼 위치
          left: "50%",
          transform: "translateX(-50%)", // 수평 중앙 정렬
        }}
      >
        결제하기
      </button>

      {/* iframe */}
      {iframeSrc && (
        <iframe
          src={iframeSrc}
          width="100%"
          height="100%" // 화면 전체를 덮도록 설정
          frameBorder="0"
          title="Payment Form"
          style={{
            position: "absolute", // 부모 div 안에서 절대 위치 설정
            top: 0,
            left: 0,
            zIndex: 0, // 버튼이 iframe 위에 있도록 zIndex 설정
          }}
        ></iframe>
      )}
    </div>
  );
};

export default PaymentPage;
