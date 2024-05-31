import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TitelandSub from '../../../shared/titelandSub';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAxiosSequer from '../../../hooks/useAxiosSequer';
import Swal from 'sweetalert2';
import useAxiousPublic from '../../../hooks/useAxiousPublic';

const IMG_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${IMG_HOSTING_KEY}`;

const UpdateItems = () => {
    const item = useLoaderData();
    console.log(item)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            recipeName: item.name,
            price: item.price,
            category: item.category,
            description: item.recipe,
        }
    });
    const axiosSecure = useAxiosSequer();
    const axiousPublic =useAxiousPublic();

    const onSubmit = async (data) => {
        const formData = new FormData();
        if (data.image && data.image.length > 0) {
            formData.append('image', data.image[0]);

            try {
                const res = await axiousPublic.post(image_hosting_api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                if (res.data.success) {
                    const imageUrl = res.data.data.url;
                    await updateMenuItem(data, imageUrl);
                }
            } catch (error) {
                console.error("Error uploading image", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to upload image. Please try again.",
                });
            }
        } else {
            await updateMenuItem(data, item.image);
        }
    };

    const updateMenuItem = async (data, imageUrl) => {
        try {
            const menuItem = {
                name: data.recipeName,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.description,
                image: imageUrl,
            };
            const response = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
            console.log(response.data)
            if (response.data.modifiedCount > 0) {
              
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your item has been updated",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error("Error updating menu item", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to update item. Please try again.",
            });
        }
    };

    return (
        <div className="mx-5">
            <TitelandSub heading="What is New" subtitel="Update an Item" />
            <form className="card-body flex justify-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe Name</span>
                    </label>
                    <input
                        {...register("recipeName", { required: true })}
                        type="text"
                        className="input input-bordered"
                        
                    />
                    {errors.recipeName && <span className="text-red-500">Recipe name is required</span>}
                </div>

                <div className="flex gap-8 w-full">
                    <div className="form-control w-[49%]">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            {...register("price", { required: true })}
                            type="number"
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

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe Description</span>
                    </label>
                    <textarea
                        {...register("description")}
                        className="textarea textarea-bordered h-24 text-xl"
                    ></textarea>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        {...register("image")}
                        type="file"
                        className="file-input w-full max-w-xs"
                    />
                </div>
                <button className="btn btn-success mt-4" type="submit">
                    Update Item
                </button>
            </form>
        </div>
    );
};

export default UpdateItems;
