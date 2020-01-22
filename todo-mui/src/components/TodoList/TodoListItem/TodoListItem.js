import React from "react";
import "./TodoListItem.scss";
import StarsIcon from "@material-ui/icons/Stars";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const TodoListItem = (props) => {
   const clsList = ['TodoListItem']
   const impIcon = ['importantIcon']
   const doneIcon = ['checkIcon']

   if (props.important) {
      clsList.push('important');
      impIcon.push('active')
   } else if (props.done) {
      clsList.push('done')
      doneIcon.push('active')
   }
      

  return (
    <li className={clsList.join(' ')}>
      <div className="taskHead">Task name</div>
      <div className="timeHead">Termin</div>
      <div className="iconsHead">Controlls</div>

      <div className="taskName"> {props.task} </div>
      <div className="timeCount"> {props.howDays} </div>
      <div className="iconsWrapper">
        <div className={impIcon.join(' ')} title="Important"
          onClick={props.onImportant}
        >
          <StarsIcon />
        </div>
        <div className={doneIcon.join(' ')} title="Done"
          onClick={props.onDone}
        >
          <CheckCircleIcon />
        </div>
        <div className="trashIcon" title="Delete"
          onClick={props.onDelete}
        >
          <DeleteIcon />
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
