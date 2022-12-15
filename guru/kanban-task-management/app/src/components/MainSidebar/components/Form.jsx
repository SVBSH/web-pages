import { useRef } from "react";
import './Form.css';
import ImgCross from '../../../assets/images/shared/icon-cross.svg';


const Form = ({ inputFields, setInputFields }) => {
  const index = useRef(inputFields.length);
  // const [inputFields, setInputFields] = useState(field_List);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const addFields = () => {
    index.current += 1;
    let newField = { name: '', index: index.current };
    setInputFields([...inputFields, newField]);
  }

  // FIXME: bug when user clics on more animation
  const removeFields = (index, event) => {


    event.currentTarget.parentNode.addEventListener('animationend', (e) => {
      let data = [...inputFields];
      data.splice(index, 1);
      setInputFields(data);
    }, { once: true })

    event.currentTarget.parentNode.classList.remove('add-btn');
    event.currentTarget.parentNode.classList.add('remove-btn');
  }

  return (

    <form className="form" onSubmit={e => { e.preventDefault() }}>
      <div className="flex flex-col">
        {inputFields.map((input, index) => {
          return (
            <div
              className="
                input__item 
                flex 
                flex-row 
                align-center
                add-btn
              "
              style={{ gap: '0rem' }}
              key={input.index}
            >
              <input
                className="input__field"
                type="text"
                name="name"
                value={input.name}
                placeholder="Name"
                onChange={event => handleFormChange(index, event)}
              />
              <button
                className="
                  btn 
                  input__remove-btn
                "
                onClick={(event) => removeFields(index, event)}>
                <img
                  className='input__remove-img'
                  src={ImgCross} alt="Button remove board column"
                />
              </button>
            </div>
          )
        })
        }
        <button data-type="secondary" className="btn" onClick={addFields}>+ Add New Column</button>

      </div>
    </form>
  )
}

export default Form;
