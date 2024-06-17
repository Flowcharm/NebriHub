import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import GeneralSelect from "@/components/GeneralSelect";
import { FormEvent, useState } from "react";
import axios from "axios";

export default function MemberCard() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [institutionClass, setInstitutionClass] = useState<string>('1º DAM G1');
    const [subjects, setSubjects] = useState<string>('');
    const [avatarLink, setAvatarLink] = useState<string>('');
    const [isEditingClass, setIsEditingClass] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3005/post-data', {
                firstName,
                lastName,
                institutionClass,
                subjects,
                avatarLink,
            }, { withCredentials: true });
            /*('Registration successful');*/
        } catch (error: any) {
            console.log(`Edit failed: ${error.response?.data?.message || 'An error occurred'}`);
        }
    };

    const handleDoubleClick = () => {
        setIsEditingClass(true);
    };

    const handleClassSelect = (value: string) => {
        setInstitutionClass(value);
        setIsEditingClass(false);
    };

    return (
        <Card className="w-[350px] mt-10">
            <CardHeader className="flex flex-col items-center">
                <Image
                    src="/example_pfp.jpeg"
                    width={70}
                    height={70}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                />
                <CardTitle>Pedro García Sánchez</CardTitle>
                {!isEditingClass ? (
                    <CardDescription onDoubleClick={handleDoubleClick}>
                        {institutionClass}
                    </CardDescription>
                ) : (
                    <GeneralSelect
                        type="classes"
                        onSelect={handleClassSelect}
                        size="small"
                        usingLabel={false}
                    />
                )}
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <GeneralSelect type={"subjects"} onSelect={setSubjects} size={"medium"}  usingLabel={false}/>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancelar</Button>
                <Button>Actualizar</Button>
            </CardFooter>
        </Card>
    );
}
