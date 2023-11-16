import Editor from "@monaco-editor/react";
import SQLDropdown from "./components/Dropdown";
import { useEffect, useState } from "react";
import DataTable from "./components/Table";
import mapper from "./assets/mapper";
import { motion } from "framer-motion";

const App = () => {
  const [query, setQuery] = useState("hello");
  const [result, setResult] = useState([]);

  const handleRun = () => {
    console.log(query);
    const queryResult = mapper({ query });
    setResult(queryResult);
    console.log("output", queryResult);
  };
  function handleEditorChange(value, event) {
    setQuery(value);
  }
  useEffect(() => {
    console.log("initial", query);
  }, [query]);
  const slideInVariant = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full flex flex-col items-center"
      style={{ backgroundColor: "#F8F8FE" }}
    >
      <h1 className="font-bold mt-5 text-3xl">SQL Query Editor</h1>
      <motion.div
        variants={slideInVariant}
        initial="hidden"
        animate="visible"
        className="w-3/4 p-5 mt-5 rounded-3xl flex flex-col items-center"
        style={{ backgroundColor: "#EAF3FE" }}
      >
        <Editor
          language="sql"
          theme="vs-light"
          height={100}
          value={query}
          onChange={handleEditorChange}
        />

        <div className=" w-full flex p-5 justify-center">
          <SQLDropdown setQuery={setQuery} className="ml-5 " />
          <div className="ml-5 bg-blue-400 text-white px-4 py-1 rounded-md">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRun}
              className="bg-blue-400 text-white px-2 rounded-md"
            >
              Run
            </motion.button>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: result.length > 0 ? 1 : 0 }}
        className="w-3/4 mt-4"
      >
        <DataTable data={result} />
      </motion.div>
    </motion.div>
  );
};

export default App;
