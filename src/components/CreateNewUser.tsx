import { Badge, Button, Card, TextInput, Title } from "@tremor/react"
import { useState } from "react"
import { useUserActions } from "../hooks/useUserActions"

export function CreateNewUser() {
	const { addUser } = useUserActions()
	const [result, setResult] = useState<"ok" | "error" | null>(null)


	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		setResult(null)

		const form = event.target as HTMLFormElement
		const formData = new FormData(form)

		const name = formData.get("name") as string
		const email = formData.get("email") as string
		const github = formData.get("github") as string

		if (!name || !email || !github) {
			return setResult("error")
		}

		addUser({ name, email, github })
		setResult("ok")
		form.reset()
	}
	const handleUpdate = () => {
		

		
	}

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form onSubmit={handleSubmit} className="">
				<TextInput name="name" placeholder="User name" />
				<TextInput name="email" placeholder="Email" />
				<TextInput name="github" placeholder="GitHub user name" />

				<div>
					<Button type="submit" className="bg-green-300 rounded-md mt-5"  >
						Create User
					</Button>
					<Button type="button" onClick={handleUpdate} className="bg-sky-400 rounded-md ml-5 mt-5" >
						Update User
					</Button>
					<span>
						{result === "ok" && (
							<Badge color='green'>Saved</Badge>
						)}
						{result === "error" && <Badge color='red'>Invalid data</Badge>}
					</span>
				</div>
			</form>
		</Card>
	)
}