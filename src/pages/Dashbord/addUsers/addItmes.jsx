import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import TitelandSub from "../../../shared/titelandSub";
import useAxiosSequer from "../../../hooks/useAxiosSequer";

const IMG_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hoting_api = `https://api.imgbb.com/1/upload?key=${IMG_HOSTING_KEY}`;

const AddItems = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const axiosSecure=useAxiosSequer();
    
    console.log(data);

    const formData = new FormData();
    formData.append('image', data.image[0]);

    try {
      // we are not useing axious publick because of base url set in public extence
      const res = await axios.post(img_hoting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      // Handle successful image upload and proceed with form submission
      const imageUrl = res.data.data.url;
      console.log('Uploaded image URL:', imageUrl);
      // Continue to handle the rest of your data submission logic here
      if(res.data.success){
        const menuItem={
          name: data.recipeName,
          category: data.category,
          price:  data.price,
          recipe: data.description,
          image: res.data.data.url

        }
        const response = await axiosSecure.post(`/menu`, menuItem);
        console.log(response.data);
        // console.log(menuItem);
      }
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  return (
    <div className="mx-5">
      <TitelandSub heading="What is New" subtitel="Add an Item"></TitelandSub>
      <form className="card-body flex justify-center" onSubmit={handleSubmit(onSubmit)}>
        {/* 1st row of form */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input
            {...register("recipeName", { required: true })}
            type="text"
            placeholder="Recipe name"
            className="input input-bordered"
          />
          {errors.recipeName && <span className="text-red-500">Recipe name is required</span>}
        </div>

        {/* 2nd row of form */}
        <div className="flex gap-8 w-full">
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
              className="input input-bordered"
            />
            {errors.price && <span className="text-red-500">Price is required</span>}
          </div>
          <div className="form-control w-[49%]">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="input input-bordered w-full"
            >
              <option value="">Select Item</option>
              <option value="salad">Salad</option>
              <option value="dessert">Dessert</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="offered">Offered</option>
            </select>
            {errors.category && <span className="text-red-500">Category is required</span>}
          </div>
        </div>

        {/* Description */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
        </div>

        {/* File input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
          {errors.image && <span className="text-red-500">Image is required</span>}
        </div>

        {/* Submit button */}
        <button className="btn btn-success mt-4" type="submit">
          Add New Food
        </button>
      </form>
    </div>
  );
};

export default AddItems;
