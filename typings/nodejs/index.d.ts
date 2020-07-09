declare namespace NodeJs {
  interface Process {
    emit(message: 'online'): void;

    on(event: string, listener: (data: unknown) => void): this;
  }

  const process: Process;
}
