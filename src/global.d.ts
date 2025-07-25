type FCClass<P = {}> = React.FC<P & React.PropsWithChildren & {
  className?: string,
}>;