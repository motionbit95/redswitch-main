import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Tabs,
  Input,
  Space,
  Typography,
  Tag,
  Image,
  Skeleton,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;
const { TabPane } = Tabs;

function ProductListPage() {
  const [selectedItemId, setSelectedItemId] = useState("0"); // 선택된 카테고리
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // 이미지 로딩 상태
  const [imageError, setImageError] = useState(false); // 이미지 에러 상태

  // 이미지 로딩 완료 후 처리
  const handleImageLoad = () => {
    setLoading(false);
  };

  // 이미지 로딩 실패 시 대체 이미지 처리
  const handleImageError = () => {
    setImageError(true); // 이미지를 찾을 수 없을 때
    setLoading(false); // 로딩 상태 종료
  };

  const categories = [
    "카테고리 1",
    "카테고리 2",
    "카테고리 3",
    "카테고리 4",
    "카테고리 5",
    "카테고리 6",
  ]; // 카테고리 목록
  const products = [
    // 카테고리 1
    {
      id: 1,
      name: "상품 1",
      category: "카테고리 1",
      description: "이 상품은 매우 유용합니다.",
      image: "https://picsum.photos/250/250?random=1",
      price: "100,000원",
      remaining: 15,
    },
    {
      id: 2,
      name: "상품 2",
      category: "카테고리 1",
      description: "고급스러운 상품입니다.",
      image: "https://picsum.photos/250/250?random=2",
      price: "150,000원",
      remaining: 8,
    },
    {
      id: 3,
      name: "상품 3",
      category: "카테고리 1",
      description: "편리하고 실용적인 상품.",
      image: "https://picsum.photos/250/250?random=3",
      price: "120,000원",
      remaining: 5,
    },
    {
      id: 4,
      name: "상품 4",
      category: "카테고리 1",
      description: "깔끔한 디자인의 상품.",
      image: "https://picsum.photos/250/250?random=4",
      price: "200,000원",
      remaining: 2,
    },
    {
      id: 5,
      name: "상품 5",
      category: "카테고리 1",
      description: "스타일리시한 상품입니다.",
      image: "https://picsum.photos/250/250?random=5",
      price: "180,000원",
      remaining: 10,
    },

    // 카테고리 2
    {
      id: 6,
      name: "상품 6",
      category: "카테고리 2",
      description: "모던한 디자인의 상품.",
      image: "https://picsum.photos/250/250?random=6",
      price: "130,000원",
      remaining: 7,
    },
    {
      id: 7,
      name: "상품 7",
      category: "카테고리 2",
      description: "편리하고 실용적인 상품.",
      image: "https://picsum.photos/250/250?random=7",
      price: "140,000원",
      remaining: 5,
    },
    {
      id: 8,
      name: "상품 8",
      category: "카테고리 2",
      description: "가성비 좋은 상품.",
      image: "https://picsum.photos/250/250?random=8",
      price: "90,000원",
      remaining: 12,
    },
    {
      id: 9,
      name: "상품 9",
      category: "카테고리 2",
      description: "편안한 사용감을 제공하는 상품.",
      image: "https://picsum.photos/250/250?random=9",
      price: "115,000원",
      remaining: 3,
    },
    {
      id: 10,
      name: "상품 10",
      category: "카테고리 2",
      description: "고급스러운 디자인의 상품.",
      image: "https://picsum.photos/250/250?random=10",
      price: "160,000원",
      remaining: 6,
    },

    // 카테고리 3
    {
      id: 11,
      name: "상품 11",
      category: "카테고리 3",
      description: "심플하고 우아한 디자인.",
      image: "https://picsum.photos/250/250?random=11",
      price: "150,000원",
      remaining: 9,
    },
    {
      id: 12,
      name: "상품 12",
      category: "카테고리 3",
      description: "모던하고 실용적인 상품.",
      image: "https://picsum.photos/250/250?random=12",
      price: "120,000원",
      remaining: 14,
    },
    {
      id: 13,
      name: "상품 13",
      category: "카테고리 3",
      description: "스타일리시하고 유니크한 상품.",
      image: "https://picsum.photos/250/250?random=13",
      price: "170,000원",
      remaining: 6,
    },
    {
      id: 14,
      name: "상품 14",
      category: "카테고리 3",
      description: "다양한 색상이 제공되는 상품.",
      image: "https://picsum.photos/250/250?random=14",
      price: "140,000원",
      remaining: 20,
    },
    {
      id: 15,
      name: "상품 15",
      category: "카테고리 3",
      description: "간편하게 사용할 수 있는 상품.",
      image: "https://picsum.photos/250/250?random=15",
      price: "110,000원",
      remaining: 8,
    },

    // 카테고리 4
    {
      id: 16,
      name: "상품 16",
      category: "카테고리 4",
      description: "고급스러운 상품.",
      image: "https://picsum.photos/250/250?random=16",
      price: "250,000원",
      remaining: 3,
    },
    {
      id: 17,
      name: "상품 17",
      category: "카테고리 4",
      description: "고급 재질로 제작된 상품.",
      image: "https://picsum.photos/250/250?random=17",
      price: "300,000원",
      remaining: 2,
    },
    {
      id: 18,
      name: "상품 18",
      category: "카테고리 4",
      description: "내구성이 뛰어난 상품.",
      image: "https://picsum.photos/250/250?random=18",
      price: "220,000원",
      remaining: 5,
    },
    {
      id: 19,
      name: "상품 19",
      category: "카테고리 4",
      description: "감각적인 디자인의 상품.",
      image: "https://picsum.photos/250/250?random=19",
      price: "190,000원",
      remaining: 4,
    },
    {
      id: 20,
      name: "상품 20",
      category: "카테고리 4",
      description: "편안하게 착용 가능한 상품.",
      image: "https://picsum.photos/250/250?random=20",
      price: "250,000원",
      remaining: 7,
    },

    // 카테고리 5
    {
      id: 21,
      name: "상품 21",
      category: "카테고리 5",
      description: "다용도 상품.",
      image: "https://picsum.photos/250/250?random=21",
      price: "110,000원",
      remaining: 10,
    },
    {
      id: 22,
      name: "상품 22",
      category: "카테고리 5",
      description: "유용한 기능이 추가된 상품.",
      image: "https://picsum.photos/250/250?random=22",
      price: "120,000원",
      remaining: 5,
    },
    {
      id: 23,
      name: "상품 23",
      category: "카테고리 5",
      description: "세련된 디자인의 상품.",
      image: "https://picsum.photos/250/250?random=23",
      price: "130,000원",
      remaining: 12,
    },
    {
      id: 24,
      name: "상품 24",
      category: "카테고리 5",
      description: "훌륭한 품질의 상품.",
      image: "https://picsum.photos/250/250?random=24",
      price: "150,000원",
      remaining: 8,
    },
    {
      id: 25,
      name: "상품 25",
      category: "카테고리 5",
      description: "고품질의 상품.",
      image: "https://picsum.photos/250/250?random=25",
      price: "180,000원",
      remaining: 6,
    },

    // 카테고리 6
    {
      id: 26,
      name: "상품 26",
      category: "카테고리 6",
      description: "새로운 디자인의 상품.",
      image: "https://picsum.photos/250/250?random=26",
      price: "160,000원",
      remaining: 10,
    },
    {
      id: 27,
      name: "상품 27",
      category: "카테고리 6",
      description: "최신 트렌드의 상품.",
      image: "https://picsum.photos/250/250?random=27",
      price: "180,000원",
      remaining: 3,
    },
    {
      id: 28,
      name: "상품 28",
      category: "카테고리 6",
      description: "기능성 좋은 상품.",
      image: "https://picsum.photos/250/250?random=28",
      price: "200,000원",
      remaining: 5,
    },
    {
      id: 29,
      name: "상품 29",
      category: "카테고리 6",
      description: "모던한 스타일의 상품.",
      image: "https://picsum.photos/250/250?random=29",
      price: "220,000원",
      remaining: 4,
    },
    {
      id: 30,
      name: "상품 30",
      category: "카테고리 6",
      description: "고급스러운 품질의 상품.",
      image: "https://picsum.photos/250/250?random=30",
      price: "250,000원",
      remaining: 2,
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.category === categories[parseInt(selectedItemId)]
  );

  const moveToScroll = (index) => {
    // 탭 클릭 시 해당 카테고리로 스크롤 이동
    const element = document.getElementById(`category-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Search Bar Section */}
      <Row justify="center" style={{ marginBottom: "10px" }}>
        <div
          style={{
            width: "100%",
            padding: "0 10px",
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Search
            placeholder={`상품을 검색해보세요.`}
            onSearch={(value) => setSearchQuery(value)}
            style={{ width: "100%", maxWidth: "600px" }}
            enterButton={<SearchOutlined />}
          />
        </div>
      </Row>

      {/* Categories Tabs */}

      <div style={{ padding: "0 10px" }}>
        {/* 상품 리스트 */}
        <Row gutter={[16, 16]} justify="flex-start">
          {filteredProducts
            // .filter((product) => product.category === item)
            .map((product) => (
              <Col key={product.id} span={12}>
                <Card
                  hoverable
                  cover={
                    product.image ? (
                      <Image
                        alt={product.name}
                        src={
                          imageError
                            ? "https://via.placeholder.com/250"
                            : product.image
                        } // 대체 이미지
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        preview={false}
                        style={{
                          width: "100%",
                          height: "auto",
                          aspectRatio: "1/1",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "auto",
                          aspectRatio: "1/1",
                        }}
                      ></div>
                    )
                  }
                  style={{
                    marginBottom: "10px",
                    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "hidden",
                  }}
                >
                  <Card.Meta
                    title={product.name}
                    description={
                      <>
                        <Typography.Text strong>
                          {product.price}
                        </Typography.Text>
                        <br />
                        <Typography.Text type="secondary">
                          남은 개수: {product.remaining}
                        </Typography.Text>
                      </>
                    }
                  />
                  {/* <div
                          style={{
                            marginTop: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Tag color="green">구매 가능</Tag>
                        </div> */}
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default ProductListPage;
