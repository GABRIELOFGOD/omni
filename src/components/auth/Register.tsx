// import { City, Country, ICity, ICountry, IState, State } from "country-state-city";
// import { useEffect, useState } from "react";
// import Selector from "../Selector";

// const Register = ({ toggle }: { toggle: () => void }) => {
//   let countryData = Country.getAllCountries();
//   const [stateData, setStateData] = useState<IState[]>();
//   const [cityData, setCityData] = useState<ICity[]>();
  
//   const [country, setCountry] = useState<ICountry | undefined>(countryData[0]);
//   const [state, setState] = useState<IState>();
//   const [city, setCity] = useState<ICity>();

//   useEffect(() => {
//     setStateData(State.getStatesOfCountry(country?.isoCode));
//   },[country]);

//   useEffect(() => {
//     setCityData(City.getCitiesOfState(country?.isoCode!, state?.isoCode!));
//   },[state]);

//   useEffect(() => {
//     stateData && setState(stateData[0]);
//   },[stateData]);

//   useEffect(() => {
//     cityData && setCity(cityData[0]);
//   },[cityData]);
  
//   return (
//     <div className="bg-light w-full md:w-fit bg-opacity-30 backdrop-blur-md border-light border-2 rounded-lg">
//       <h1 className="text-2xl text-center font-bold p-4">Register</h1>
//       <form className="p-4">
//         <div className="flex flex-col md:flex-row w-full h-full">
//           <div className="flex flex-col mb-4 w-full mr-2">
//             <label htmlFor="first-name" className="text-lg font-bold">First Name</label>
//             <input type="text" name="first-name" id="first-name" className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full" />
//           </div>
//           <div className="flex flex-col mb-4 w-full">
//             <label htmlFor="last-name" className="text-lg font-bold">Last Name</label>
//             <input type="text" name="last-name" id="last-name" className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full" />
//           </div>
//         </div>
//         {/* <div className="flex flex-col md:flex-row w-full h-full">
//           <div className="flex flex-col mb-4 w-full mr-2">
//             <label htmlFor="first-name" className="text-lg font-bold">First Name</label>
//             <Selector data={countryData} selected={country} setSelected={setCountry} />
//           </div>
//           <div className="flex flex-col mb-4 w-full">
//             <label htmlFor="last-name" className="text-lg font-bold">Last Name</label>
//             <Selector data={stateData || []} selected={state || { name: '' }} setSelected={setState} />
//           </div>
//         </div> */}
//         <div className="flex flex-col md:flex-row w-full h-full">
//           <div className="flex flex-col mb-4 w-full mr-2">
//             <label htmlFor="first-name" className="text-lg font-bold">
//               Country
//             </label>
//             <Selector
//               data={countryData}
//               selected={country}
//               setSelected={setCountry}
//             />
//           </div>
//           <div className="flex flex-col mb-4 w-full">
//             <label htmlFor="last-name" className="text-lg font-bold">
//               State
//             </label>
//             <Selector
//               data={stateData || []}
//               selected={state}
//               setSelected={setState}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col mb-4 w-full">
//           <label htmlFor="email" className="text-lg font-bold">City</label>
//           <Selector data={cityData || []} selected={city} setSelected={setCity} />
//         </div>
//         <div className="flex flex-col md:flex-row w-full h-full">
//           <div className="flex flex-col mb-4 w-full mr-2">
//             <label htmlFor="phone" className="text-lg font-bold">Phone number</label>
//             <input type="text" name="phone" id="phone" className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full" />
//           </div>
//           <div className="flex flex-col mb-4 w-full">
//             <label htmlFor="referrer" className="text-lg font-bold">Referral code (optional)</label>
//             <input type="text" name="referrer" id="referrer" className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full" />
//           </div>
//         </div>
//         <div className="flex flex-col mb-4 w-full">
//           <label htmlFor="email" className="text-lg font-bold">Email</label>
//           <input type="email" name="email" id="email" className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full md:w-full md:min-w-[350px]" />
//         </div>
//         <div className="flex flex-col mb-4 w-full">
//           <label htmlFor="address" className="text-lg font-bold">Address</label>
//           <input type="text" name="address" id="address" className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full md:w-full md:min-w-[350px]" />
//         </div>
//         <div className="flex flex-col mb-4 w-full">
//           <label htmlFor="password" className="text-lg font-bold">Password</label>
//           <input type="password" className="border-light border-2 rounded-lg outline-none font-semibold p-2 w-full md:w-full md:min-w-[350px] text-white bg-transparent" />
//         </div>
//         <div className="flex flex-col mb-4 w-full">
//           <label htmlFor="confirmPassword" className="text-lg font-bold">Confirm Password</label>
//           <input type="password" className="border-light border-2 rounded-lg outline-none font-semibold p-2 w-full md:w-full md:min-w-[350px] text-white bg-transparent" />
//         </div>
//         <div className="flex justify-between pb-5">
//           {/* <div className="text-light text-xs underline">Forgot Password?</div> */}
//           <p className="text-light text-xs">Already registered? <span onClick={toggle} className="text-primary underline cursor-pointer">Login</span></p>
//         </div>
//         <button type="submit" className="bg-light bg-opacity-40 text-light w-full text-lg font-bold p-2 rounded-lg">Register</button>
//       </form>
//     </div>
//   )
// }

// export default Register

import { City, Country, ICity, ICountry, IState, State } from "country-state-city";
import { useEffect, useState } from "react";
import Selector from "../Selector";
import { useRegister } from "../../hooks/useRegister";
import { UserRegisterData } from "../../utils";
import { toast } from "sonner";
import MiniLoading from "../primary/MiniLoading";
// import { useNavigate } from "react-router-dom";

const Register = ({ toggle }: { toggle: () => void }) => {
  // const navigate = useNavigate();
  const countryData = Country.getAllCountries();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    referralCode: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [country, setCountry] = useState<ICountry | undefined>(countryData[0]);
  const [state, setState] = useState<IState | undefined>();
  const [city, setCity] = useState<ICity | undefined>();

  const [stateData, setStateData] = useState<IState[]>();
  const [cityData, setCityData] = useState<ICity[]>();

  const { registerUser, error, loading } = useRegister();

  // Fetch states based on selected country
  useEffect(() => {
    if (country) {
      const states = State.getStatesOfCountry(country.isoCode);
      setStateData(states);
      setState(states[0]); // Default to the first state
    }
  }, [country]);

  // Fetch cities based on selected state
  useEffect(() => {
    if (state) {
      const cities = City.getCitiesOfState(state.countryCode, state.isoCode);
      setCityData(cities);
      setCity(cities[0]); // Default to the first city
    }
  }, [state]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation for password match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const { confirmPassword, ...restFormData } = formData;
    const payload: UserRegisterData = {
      ...restFormData,
      country: country?.name,
      state: state?.name!,
      city: city?.name!,
    };

    try {
      const regRes = await registerUser(payload);
      if(regRes && regRes.status == "fail" || regRes.status == "error") throw new Error(regRes.message);
      toast.success(regRes.message, {
        position: "top-right",
        duration: 5000,
      });
      sessionStorage.setItem("token", JSON.stringify(regRes.token));
      location.reload();
      // toggle(); // Navigate to login
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  if (error) {
    toast.error(error);
  }

  return (
    <div className="bg-light w-full md:w-fit bg-opacity-30 backdrop-blur-md border-light border-2 rounded-lg">
      <h1 className="text-2xl text-center font-bold p-4">Register</h1>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex flex-col mb-4 w-full mr-2">
            <label htmlFor="firstName" className="text-lg font-bold">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full"
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <label htmlFor="lastName" className="text-lg font-bold">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex flex-col mb-4 w-full mr-2">
            <label htmlFor="country" className="text-lg font-bold">
              Country
            </label>
            <Selector data={countryData} selected={country} setSelected={setCountry} />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <label htmlFor="state" className="text-lg font-bold">
              State
            </label>
            <Selector data={stateData || []} selected={state} setSelected={setState} />
          </div>
        </div>
        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="city" className="text-lg font-bold">
            City
          </label>
          <Selector data={cityData || []} selected={city} setSelected={setCity} />
        </div>
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex flex-col mb-4 w-full mr-2">
            <label htmlFor="phone" className="text-lg font-bold">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full"
            />
          </div>
          <div className="flex flex-col mb-4 w-full">
            <label htmlFor="referrer" className="text-lg font-bold">
              Referral code (optional)
            </label>
            <input
              type="text"
              name="referrer"
              id="referrer"
              value={formData.referralCode}
              onChange={handleInputChange}
              className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="email" className="text-lg font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full"
          />
        </div>
        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="address" className="text-lg font-bold">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full"
          />
        </div>
        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="password" className="text-lg font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full"
          />
        </div>
        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="confirmPassword" className="text-lg font-bold">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full"
          />
        </div>
        <div className="flex justify-between pb-5">
          <p className="text-light text-xs">
            Already registered?{" "}
            <span onClick={toggle} className="text-primary underline cursor-pointer">
              Login
            </span>
          </p>
        </div>
        <button
          type="submit"
          className="bg-light bg-opacity-40 text-light w-full text-lg font-bold h-12 relative p-2 rounded-lg"
        >
          {loading ? <MiniLoading /> : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
