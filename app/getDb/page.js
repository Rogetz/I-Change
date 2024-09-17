
import { sql } from '@vercel/postgres';
 
export default async function GetDbPage() {
  try {
    const petName = "toby";
    const ownerName = "tommy";
    if (!petName || !ownerName) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  } catch (error) {
    return <div>{`error found : ${error}`}</div>
  }
  try {
    const pets = await sql`SELECT Name FROM Pets;`;
    //returns command SELECT and rows // which is an ,row count which is simply the count of items found.
    // so simply taste if the rows array length is greater than 1
    return <div>{`pets found : ${JSON.stringify(pets)}`}</div>      
  } catch (error) {
    return <div>{`error found: ${error}`}</div>
  }
}