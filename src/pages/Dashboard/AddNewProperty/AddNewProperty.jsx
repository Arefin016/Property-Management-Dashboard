import { useForm } from "react-hook-form"
import { FaUtensils } from "react-icons/fa"

const AddNewProperty = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <h2
        data-aos="flip-left"
        data-aos-duration="1500"
        className="md:text-5xl font-semibold text-4xl text-center md:my-5 my-3 uppercase"
      >
        Add a New Property
      </h2>
      <div
        data-aos="flip-left"
        data-aos-duration="1500"
        className="md:m-10 m-3"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Property Name Field Start */}
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text">Property Name*</span>
            </div>
            <input
              {...register("propertyName", {
                required: "Property Name is required",
              })}
              type="text"
              placeholder="Property Name"
              className="input input-bordered w-full"
            />
            {errors.propertyName && (
              <span className="text-red-500 text-sm">
                {errors.propertyName.message}{" "}
              </span>
            )}
          </div>

          {/* Property Name Field End*/}

          {/* Property Type and Rental Price */}
          <div className="flex md:flex-row flex-col gap-6">
            {/* Property Type */}
            <div className="form-control w-full md:my-2">
              <div className="label">
                <span className="label-text">Property Type*</span>
              </div>
              <select
                {...register("propertyType", {
                  required: "Property Type is required",
                })}
                className="select select-bordered w-full"
              >
                <option value="" disabled selected>
                  Select a Property Type
                </option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Commercial">Commercial</option>
              </select>
              {errors.propertyType && (
                <span className="text-red-500 text-sm">
                  {errors.propertyType.message}{" "}
                </span>
              )}
            </div>

            {/* Rental Price */}
            <div className="form-control w-full md:my-2">
              <div className="label">
                <span className="label-text">Rental Price*</span>
              </div>
              <input
                {...register("rentalPrice", {
                  required: "Rental Price is required",
                  validate: {
                    positive: (value) =>
                      value > 0 || "Price must be a positive number",
                  },
                })}
                type="number"
                placeholder="Rental Price"
                className="input input-bordered w-full"
              />
              {errors.rentalPrice && (
                <span className="text-red-500 text-sm">
                  {errors.rentalPrice.message}{" "}
                </span>
              )}
            </div>
          </div>

          {/* Status and Date */}
          <div className="flex md:flex-row flex-col gap-6">
            {/* Property Type */}
            <div className="form-control w-full md:my-2">
              <div className="label">
                <span className="label-text">Rental Status*</span>
              </div>
              <select
                {...register("rentalStatus", {
                  required: "Rental Status is required",
                })}
                className="select select-bordered w-full"
              >
                <option value="" disabled selected>
                  Select a Rental Status
                </option>
                <option value="Available">Available</option>
                <option value="Rented">Rented</option>
                <option value="Under Maintenance">Under Maintenance</option>
              </select>
              {errors.rentalStatus && (
                <span className="text-red-500 text-sm">
                  {errors.rentalStatus.message}
                </span>
              )}
            </div>

            {/* Rental Date */}
            <div className="form-control w-full md:my-2">
              <div className="label">
                <span className="label-text">Rental Date*</span>
              </div>
              <input
                {...register("rentalDate", {
                  required: "Rental Date is required",
                  validate: {
                    notPastDate: (value) =>
                      new Date(value) >= new Date() ||
                      "Date cannot be in the past",
                  },
                })}
                type="date"
                className="input input-bordered w-full"
              />
              {errors.rentalDate && (
                <span className="text-red-500 text-sm">
                  {errors.rentalDate.message}
                </span>
              )}
            </div>
          </div>
          {/* Rental Description */}
          <div className="form-control">
            <div className="label">
              <span className="label-text">Rental Details</span>
            </div>
            <textarea
              {...register("rentalDesc")}
              className="textarea textarea-bordered h-24"
              placeholder="Rental Details"
            ></textarea>
          </div>

          <button className="btn mt-2">
            Add Property <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddNewProperty
