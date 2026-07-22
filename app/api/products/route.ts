export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const search = searchParams.get('search')
  const sort = searchParams.get('sort')
  const page = searchParams.get('page')

   return Response.json({
    search,
    page,
    sort,
  });
  
}

export async function POST(request: Request) {
  const body = await request.json()
  return  Response.json({
    message:'success',
    prodcut: body
  })
}