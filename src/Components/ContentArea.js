import "./ContentArea.css"

export function ContentArea(props)
{
  return (
    <div className='contentArea'>
      {props.children}
    </div>
  )
}