import Header from "../Components/Header";
import ApiTopic from "../Components/ApiTopic"

const Categories = () => {
  
  return (
    <div className="p-3 px-5">
      <div
        className="p-2 px-5"
        style={{
          background: "rgb(238,242,243)",
          borderRadius: "15px",
        }}
      >
        <div className="d-flex">
          <div className="col">
            <Header />
          </div>
          <div style={{ width: "507px" }}></div>
        </div>
        <ApiTopic topic="Fantasy"/>
        <ApiTopic topic="History"/>
        <ApiTopic topic="Children"/>
        <ApiTopic topic="Classics"/>
        <ApiTopic topic="Educational"/>
        <ApiTopic topic="Textbooks"/>
        <ApiTopic topic="Cooking"/>
        <ApiTopic topic="Poetry"/>
      </div>
    </div>
  );
};

export default Categories;
