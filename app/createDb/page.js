"use server"

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export default async function CreateDb() {
  /*try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }*/
  try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
      
      NextResponse.json({ result }, { status: 200 });
      return(
        <div>{` the response result :${result}`}</div>
      )
  } catch (error) {
      NextResponse.json({ error }, { status: 500 });
      return(
        <div>{` the response error :${error}`}</div>
      )
  }
}

