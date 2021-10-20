import React from "react";

export const Search = () => {
  const [state, setState] = React.useState("");

  return (
    <div className="chatlist_search pt-1 relative mt-2 mb-1 mx-1 sticky top-0 rounded">
      {/* <!-- Full width Input --> */}
      <input
        className={styles.input}
        type="text"
        placeholder="Select a user and start chatting"
        value={state}
        onChange={(e) => setState(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            console.log(`Searching for ${state}...`);

            setState("");
          }
        }}
      />

      <button className={styles.searchButton}>
        <i className="fas fa-search "></i>
      </button>
    </div>
  );
};

export const styles = {
  searchButton:
    "py-2 px-3 bg-gray-300 text-xl text-gray-500 absolute top-1 right-0 hover:bg-gray-600 hover:text-white focus:outline-none",
  input: "bg-gray-200 w-full px-3 py-2.5 focus:outline-none font-light",
};
