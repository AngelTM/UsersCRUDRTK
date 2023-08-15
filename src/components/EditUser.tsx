import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks/store'
import { UserWithID } from '../store/users/Slice'
import { useUserActions } from '../hooks/useUserActions'
import {  Button, Card, TextInput, Title } from '@tremor/react'

export const EditUserForm = () => {
    const navigate = useNavigate()
    const { editUser } = useUserActions()
    const params = useParams()
    const users = useAppSelector((state)=>state.users)
    const [user,setUser]= useState<UserWithID>()

    useEffect(() => {
      if (params.id) {
        const foundUser = users.find(user=>user.id === params.id);
        setUser(foundUser)
      }
    }, [params.id,users])
    
    const handleChange = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

		
        const form = event.target as HTMLFormElement
		const formData = new FormData(form)

		const name = formData.get("name") as string
		const email = formData.get("email") as string
		const github = formData.get("github") as string
        if (params.id) {
            setUser({
                id:params.id,
                name,
                email,
                github
            })
        }
        
    }
    const handleSubmit=(e: { preventDefault: () => void })=>{
        if (user) {
            editUser(user)
            navigate('/')
        }else{
            e.preventDefault();
            navigate('/')
        }
    }
  return (
    <Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form onSubmit={handleSubmit} onChange={handleChange} className="">
				<TextInput name="name" placeholder="User name" value={user?.name} />
				<TextInput name="email" placeholder="Email" value={user?.email}/>
				<TextInput name="github" placeholder="GitHub user name"value={user?.github} />

				<div>
					<Button type="submit" className="bg-green-300 rounded-md mt-5"  >
						Create User
					</Button>
				</div>
			</form>
            </Card>
  )
}
