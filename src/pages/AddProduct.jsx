import { useState } from "react";
import { supabase } from "../supabase";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [category, setCategory] =
    useState("laptops");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] =
    useState(false);
const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (!image) {
        alert("Please select an image");
        return;
      }

      if (image.size > 5 * 1024 * 1024) {
        alert(
          "Image must be smaller than 5 MB"
        );
        return;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Please login first");
        return;
      }

      const fileName =
        Date.now() + "-" + image.name;

      const { error: uploadError } =
        await supabase.storage
          .from("product-images")
          .upload(fileName, image);

      if (uploadError) throw uploadError;

      const { data: publicUrlData } =
        supabase.storage
          .from("product-images")
          .getPublicUrl(fileName);

      const imageUrl =
        publicUrlData.publicUrl;

      const { error } = await supabase
        .from("electrax_products")
        .insert([
          {
            title,
            description,
            category,
            price,
            image_url: imageUrl,
            user_id: user.id,
          },
        ]);

      if (error) throw error;

setMessage("✅ Product listed successfully!");
setTimeout(() => {
  setMessage("");
}, 3000);
      setTitle("");
      setDescription("");
      setCategory("laptops");
      setPrice("");
      setImage(null);
    } catch (err) {
      console.log(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        padding: "120px 80px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "25px",
          background:
            "rgba(255,255,255,0.03)",
          border:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          List Your Product
        </h1>
        {message && (
  <div
    style={{
      background:
        "rgba(34,197,94,0.15)",
      border:
        "1px solid rgba(34,197,94,0.4)",
      color: "#22C55E",
      padding: "12px",
      borderRadius: "12px",
      marginBottom: "20px",
      textAlign: "center",
      fontWeight: "600",
    }}
  >
    {message}
  </div>
)}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            required
            style={inputStyle}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            rows="5"
            required
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            style={inputStyle}
          >
            <option value="laptops">
              Laptops
            </option>
            <option value="audio">
              Audio
            </option>
            <option value="controllers">
              Gaming
            </option>
            <option value="accessories">
              Accessories
            </option>
          </select>

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            required
            style={inputStyle}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files[0])
            }
            required
            style={{
              marginBottom: "20px",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "16px",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              background:
                "linear-gradient(90deg,#00F5FF,#8B5CF6)",
              color: "white",
              fontWeight: "700",
              fontSize: "1rem",
            }}
          >
            {loading
              ? "Uploading..."
              : "List Product"}
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "12px",
  border:
    "1px solid rgba(255,255,255,0.1)",
  background:
    "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
};

export default AddProduct;