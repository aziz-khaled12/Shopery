import React from "react";

const ImagesFlex = ({ src, alt }) => {
  
  const images = src.split("%7C");

  console.log(images)



  if (alt.includes("pair")) {
    return (
      <div
        style={{
          display: "flex",
          gap: "12px",
          margin: "20px 0",
          width: "100%",
          overflow: "hidden", // Prevents container from expanding
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              minWidth: 0, // Crucial for flex item constraints
            }}
          >
            <img
              src={img}
              alt={`${alt}-${i}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // or "contain" based on your needs
                display: "block",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}

      </div>
    );
  }
  // Default image rendering
  return <img src={src} alt={alt} style={{ maxWidth: "100%" }} />;
};

export default ImagesFlex;
