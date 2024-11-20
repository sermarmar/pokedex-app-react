import { Card, CardBody, CardHeader, Chip, Typography } from "@material-tailwind/react";
import { FC, useEffect, useState } from "react"
import { TypeColor } from "../../core/model/TypeColor";
import { TypeColorService } from "../../core/services/TypeColorService";
import { ChipType } from "./ChipType";

interface CardProps {
    title: string
    image: string
    types: string[]
}

export const PokemonCard: FC<CardProps> = ({ title, image, types }) => {
    const typesList = types.map(type => (
        <ChipType type={ type } />
    ))

    return (
        <Card className="w-56">
            <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
                <img src={ image } alt="" />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray" className="capitalize">
                    { title }
                </Typography>
                <div className="flex gap-3">
                    { typesList }
                </div>
                
            </CardBody>
        </Card>
    );
}