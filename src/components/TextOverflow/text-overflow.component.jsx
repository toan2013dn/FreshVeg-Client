function TextOverflow({ width, content, fontWeight }) {
  return (
    <div
      style={{
        fontWeight: `${fontWeight}`,
        width: `${width}px`,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      title={content}
    >
      {content}
    </div>
  )
}

export default TextOverflow
