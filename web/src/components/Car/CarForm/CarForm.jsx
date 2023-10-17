import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const CarForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.car?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="make"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Make
        </Label>

        <TextField
          name="make"
          defaultValue={props.car?.make}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="make" className="rw-field-error" />

        <Label
          name="model"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Model
        </Label>

        <TextField
          name="model"
          defaultValue={props.car?.model}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="model" className="rw-field-error" />

        <Label
          name="year"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Year
        </Label>

        <NumberField
          name="year"
          defaultValue={props.car?.year}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="year" className="rw-field-error" />

        <Label
          name="color"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color
        </Label>

        <TextField
          name="color"
          defaultValue={props.car?.color}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="color" className="rw-field-error" />

        <Label
          name="mileage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mileage
        </Label>

        <TextField
          name="mileage"
          defaultValue={props.car?.mileage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="mileage" className="rw-field-error" />

        <Label
          name="vinNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vin number
        </Label>

        <TextField
          name="vinNumber"
          defaultValue={props.car?.vinNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vinNumber" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CarForm
