const Notification = ({ notification }) => {
    if (notification === null) {
        return null
    }

    if (notification.includes("removed")) {
      return(
        <div className="error-notification">
          {notification}
        </div>
      )
    }

    return(
        <div className="successful-notification">
          {notification}
        </div>
    )
}

export default Notification