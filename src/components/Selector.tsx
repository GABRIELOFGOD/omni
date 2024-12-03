// import { ICountry, IState } from "country-state-city"

// interface ISelector {
//   data: ICountry[] | IState[];
//   selected: ICountry | IState;
//   setSelected: (country: ICountry | IState | undefined) => void;
// }

// const Selector = ({ data, selected, setSelected }: ISelector) => {
//   return (
//     <div>
//       <select
//         value={selected.name}
//         onChange={(e) => setSelected(data.find((item: ICountry | IState) => item.name === e.target.value) || data[0])}
//         className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full h-10"
//         style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
//       >
//         {data.map((item: ICountry | IState) => (
//           <option key={item.name} value={item.name} className="bg-primary">{item.name}</option>
//         ))}
//       </select>
//     </div>
//   )
// }

// export default Selector

import { ICountry, IState } from "country-state-city";

interface ISelector<T> {
  data: T[]; // Array of either ICountry or IState
  selected: T | undefined; // Selected item of type T
  setSelected: (value: T | undefined) => void; // Setter function for selected item
}

const Selector = <T extends { name: string }>({
  data,
  selected,
  setSelected,
}: ISelector<T>) => {
  return (
    <div>
      <select
        value={selected?.name || ''}
        onChange={(e) =>
          setSelected(data.find((item) => item.name === e.target.value) || undefined)
        }
        className="border-light border-2 text-white bg-transparent rounded-lg outline-none font-semibold p-2 w-full h-10"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        {data.map((item) => (
          <option key={item.name} value={item.name} className="bg-primary">
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
