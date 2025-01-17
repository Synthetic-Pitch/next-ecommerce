
import { NextRequest, NextResponse } from 'next/server';
import ConnectionDB from '../../lib/mongodb';
import Model from '../model/model';


export async function GET(){
  await ConnectionDB();
  
  try{
    const company = await Model.find();
    return NextResponse.json(company,{status:200})
  }
  catch(err){
    console.log(`Error fetching data! ${err}`);
    return NextResponse.json({message:"Error connecting to server"})
  }

}

export async function POST(req:NextRequest){
  await ConnectionDB();

  try{
    const {name,email} = await req.json();

    if(!name || !email){
      return NextResponse.json(
        {message: 'Name and email arre required!'},
        {status:400}
      )
    }
    const newCompany = await Model.create({name,email});
    return NextResponse.json(newCompany,{status:201})
    
  }
  catch(err){
    console.log(`Error creating company ${err}`);
    return NextResponse.json({message: 'Error creating company'},{status:500})
  }
}