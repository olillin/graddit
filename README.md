# GräddIT

Calculator website for calculating the ingredients of turquoise whipped cream
like [P.R.I.T.](https://prit.chalmers.it) makes.

## Deployment

### Using Docker run

```console
docker run -p "8080:8080" ghcr.io/cthit/graddit:latest
```

### Using Docker Compose

See [`compose.yaml`](./compose.yaml) for an example.

## Development

Thank you for wanting to contribute! GraddIT is written in plain JavaScript, so
to start the server simply run:

```console
node .
```

All files are served statically from [`public/`](./public).

