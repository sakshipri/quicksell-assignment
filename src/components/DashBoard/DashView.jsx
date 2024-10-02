import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as TodoIcon } from '../../icons_FEtask/To-do.svg';
import { ReactComponent as AddIcon } from '../../icons_FEtask/add.svg';
import { ReactComponent as NoPriorityIcon } from '../../icons_FEtask/No-priority.svg';
import { ReactComponent as LowPriorityIcon } from '../../icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../../icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as HighPriorityIcon } from '../../icons_FEtask/Img - High Priority.svg';
import { ReactComponent as UrgentPriorityIcon } from '../../icons_FEtask/SVG - Urgent Priority colour.svg';
import { ReactComponent as InProgressIcon } from '../../icons_FEtask/in-progress.svg';
import { ReactComponent as BacklogIcon } from '../../icons_FEtask/Backlog.svg';
import { ReactComponent as ThreeDotIcon } from '../../icons_FEtask/3 dot menu.svg';
import { ReactComponent as DoneIcon } from '../../icons_FEtask/Done.svg';
import { ReactComponent as CanceledIcon } from '../../icons_FEtask/Cancelled.svg';
import "./DashView.css";
import Card from "../Card/Card";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  const icons = (icon) => {
      switch (icon) {
        case "No priority":
          return <NoPriorityIcon />
        case "Low":
          return <LowPriorityIcon />
        case "Medium":
          return <MediumPriorityIcon />
        case "High":
          return <HighPriorityIcon />
        case "Urgent":
          return <UrgentPriorityIcon />
        case "Todo":
          return <TodoIcon />
        case "In progress":
          return <InProgressIcon />
        case "Backlog":
          return <BacklogIcon />
        case "Done":
          return <DoneIcon />
        case "Canceled":
          return <CanceledIcon />
      }
  }

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly", padding:"10px" }}>
        {selectedData.map((elem, index) => {
          console.log(elem);
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      icons(elem[index].title)
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display : 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AddIcon />{" "}
                    <ThreeDotIcon />
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;



