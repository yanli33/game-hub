import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
interface Props {
  onSelectedGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}
const GenerList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres()
  if (isLoading) return <Spinner />
  if (error) return null
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectedGenre(genre)
                }}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenerList
