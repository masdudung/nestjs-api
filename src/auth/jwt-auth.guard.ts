import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IS_PUBLIC_KEY } from 'src/common/decorator/skip-auth.decorator';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true; // Skip auth for public routes
    }

    // Get the request object from either HTTP or GraphQL context
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    // Pass the request object to the super canActivate method
    return super.canActivate(new ExecutionContextHost([request]));
  }
}
