import Sharp, { type Sharp} from 'sharp'

type Size = { width: number, height: number }
type input = { path: string, size: Size, blur: number }

export default async function({ path, size, blur }:input): void {
  let sharpOriginal = Sharp(path) as Sharp
  const {width, height} = size
  await sharpOriginal.toFile(path.replace(".jpg", "__blur.jpg"))
}
