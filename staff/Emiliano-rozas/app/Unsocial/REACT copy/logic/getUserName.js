const getUserName = userId => {
    if (typeof userId !== "string") throw new Error("Invalid UserId")

    const users = JSON.parse(localStorage.users)

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error("User not found")

    return user.name
}