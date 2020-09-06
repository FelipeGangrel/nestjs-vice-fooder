import { NestInterceptor, ExecutionContext, Injectable, NotFoundException, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import EntityNotfoundException from 'src/exceptions/entity-not-found.exception';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {

    return next.handle().pipe(
      catchError(error => {
        if (error instanceof EntityNotfoundException) {
          throw new NotFoundException(error.message);
        } else {
          throw error;
        }
      })
    );
  }
}
